import Image from "next/image";

const AVATAR_SIZE = 300;

export const Yo = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto px-6 pt-32 pb-56">
      <Image
        src="/assets/images/juan3.png"
        alt="Juan Borigen"
        width={AVATAR_SIZE}
        height={AVATAR_SIZE}
        className="object-cover rounded-full border border-foreground/10"
      />
      <p className="text-center text-2xl leading-relaxed text-foreground/80">
        Estoy aquí para poner al servicio todos mis hallazgos relacionados con la consciencia, metafísica, meditación, sabiduría ancestral y todas las diversas herramientas e ideas que tengan que ver con el desarrollo humano orientado a que cada vez podamos vivir mejores vidas, mas plenas, mas COHERENTES con nosotros mismos. Sin escaparnos del miedo, integrando cada parte de nuestro ser y cada area de nuestra vida.
      </p>
      <p className="text-2xl">Desde el Amor y hacia el poder personal.</p>
    </section>
  );
};

export default Yo;
