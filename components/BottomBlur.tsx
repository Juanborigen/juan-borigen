type BottomBlurProps = {
  // "fixed" pega el blur a la ventana (uso global en el layout).
  // "sticky" lo limita a la sección que lo contiene (uso puntual en una página).
  sticky?: boolean;
};

export const BottomBlur = ({ sticky = false }: BottomBlurProps) => (
  <div
    className={`${sticky ? "sticky" : "fixed"} bottom-0 left-0 right-0 w-full h-64 z-40 pointer-events-none`}
  >
    {/* capa de blur enmascarada */}
    <div
      className="absolute inset-0"
      style={{
        maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 100%)",
        backdropFilter: "blur(32px)",
      }}
    />
    {/* fade sólido al color de fondo del tema en el borde */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to top, color-mix(in srgb, var(--color-background) 93%, transparent) 0%, transparent 60%)",
      }}
    />
  </div>
);

export default BottomBlur;
