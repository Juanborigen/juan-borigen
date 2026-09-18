import { create } from "zustand";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";
const DARK_ATTRIBUTE_VALUE: Theme = "dark";

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  syncFromDocument: () => void;
};

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

// El tema arranca en "light" en el server y en el primer render del
// cliente (evita mismatches de hidratación). El script inline en
// layout.tsx ya aplicó el data-theme correcto al <html> antes del paint;
// syncFromDocument() alinea este store con eso apenas monta el Nav.
export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",
  setTheme: (theme) => {
    applyTheme(theme);
    set({ theme });
  },
  toggleTheme: () => {
    const next: Theme = get().theme === "light" ? "dark" : "light";
    applyTheme(next);
    set({ theme: next });
  },
  syncFromDocument: () => {
    if (document.documentElement.getAttribute("data-theme") === DARK_ATTRIBUTE_VALUE) {
      set({ theme: "dark" });
    }
  },
}));
