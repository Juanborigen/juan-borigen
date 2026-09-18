type Channel = {
  label: string;
  value: string;
  href: string;
  external: boolean;
};

const CHANNELS: Channel[] = [
  {
    label: "Canal YouTube",
    value: "@juanborigen",
    href: "https://www.youtube.com/@juanborigen",
    external: true,
  },
  {
    label: "Instagram",
    value: "@juanborigen",
    href: "https://www.instagram.com/juanborigen",
    external: true,
  },
  {
    label: "Contactame a",
    value: "borigenjm@gmail.com",
    href: "mailto:borigenjm@gmail.com",
    external: false,
  },
];

export const Canales = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 max-w-2xl mx-auto px-6 py-32">
      <h2 className="text-center text-3xl">Encontrame en:</h2>
      <ul className="flex flex-col w-full gap-4">
        {CHANNELS.map(({ label, value, href, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-1 p-6 rounded-xl border border-foreground/10 transition-shadow duration-300 hover:shadow-[0_0_40px_color-mix(in_srgb,var(--color-foreground)_12%,transparent)]"
            >
              <span className="text-xs uppercase tracking-widest text-foreground/40">
                {label}
              </span>
              <span className="font-[family-name:var(--font-cormorant)] text-2xl text-foreground transition-colors duration-300 group-hover:underline">
                {value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Canales;
