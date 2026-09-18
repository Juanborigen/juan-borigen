import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.scss";
import CustomCursor from "@/components/CustomCursor";
import Transitions from "@/components/Transitions";
import SmoothSroll from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { GlobalBottomBlur } from "@/components/GlobalBottomBlur";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Juan Borigen",
  description: "Recordando quien eres, a través de practicas de consciencia. Exponernos a la información coherente con nuestra busqueda nos acerca al autoconocimieto y la plenitud.",
};

const THEME_INIT_SCRIPT = `
  (function () {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorantGaramond.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <SmoothSroll>
          <Nav />
          <Transitions />
            {children}
          <GlobalBottomBlur />
          <CustomCursor />
        </SmoothSroll>
      </body>
    </html>
  );
}
