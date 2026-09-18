"use client";

import { useEffect } from "react";
import { TransitionLink } from "@/components/TransitionLink";
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/lib/store/useThemeStore";

const NAV_ITEMS = [
  { label: "Escritos", href: "/escritos" },
  { label: "Yo", href: "/yo" },
  { label: "Canales", href: "/canales" },

] as const;

const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    useThemeStore.getState().syncFromDocument();
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
      className="text-foreground/40 hover:text-foreground transition-colors duration-300 pointer-events-auto"
    >
      {theme === "light" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
};

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 flex items-center justify-between pointer-events-none max-w-6xl mx-auto">

      {/* Logo — izquierda */}
      <TransitionLink
        href="/"
        className="text-3xl font-thin tracking-tight leading-none text-foreground/40 hover:text-foreground transition-colors duration-300 select-none pointer-events-auto"
      >
        Juan Borigen
      </TransitionLink>

      {/* Items — derecha */}
      <ul className="flex items-center gap-6 bg-background/80 backdrop-blur-xl rounded-2xl px-6 py-3 pointer-events-auto">
        {NAV_ITEMS.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <TransitionLink
                href={href}
                className={`text-xl transition-colors duration-300 ${
                  isActive ? "text-foreground underline-offset-4 underline" : "text-foreground/40 hover:text-foreground"
                }`}
              >
                {label}
              </TransitionLink>
            </li>
          );
        })}
        <li>
          <ThemeToggle />
        </li>
      </ul>

    </nav>
  );
};

export default Nav;
