"use client";

import { usePathname } from "next/navigation";
import { BottomBlur } from "@/components/BottomBlur";

const HOME_PATH = "/";

// La home renderiza su propio <BottomBlur sticky /> después del <Hero />
// para no tapar la figura de partículas con el blur fijo a la ventana.
export const GlobalBottomBlur = () => {
  const pathname = usePathname();

  if (pathname === HOME_PATH) return null;

  return <BottomBlur />;
};

export default GlobalBottomBlur;
