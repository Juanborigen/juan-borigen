import Hero from "@/components/Hero";
import { BottomBlur } from "@/components/BottomBlur";


export default function Home() {
  return (
    <div>
      <main className="">
        {/* <HeroContainer /> */}
        <Hero />
        <div className="relative min-h-screen flex items-center flex-col gap-10 justify-center mb-24">
          <p className="tracking-wide text-foreground leading-relaxed max-w-4xl text-center text-3xl">
            Donde lo infinito y lo fugaz se tocan. Vivimos en un constante intercambio con todo lo que nos rodea, una danza que nos lleva desde lo mas elevado a lo mas mundado, de la realización, el propósito y el altruismo a la culpa, verguenza y dolor. Así de basta es la experiencia humana, podemos sentirnos Dioses en un momento y despues simples animales sin una aparente razón de ser. El tiempo transcurre en todas las direcciones y nosotros aprendemos en esta escuela de la vida. Elegimos consciente o inconscientemente a donde queremos dirigirnos, a que gamas de la experiencia queremos acercarnos, siempre tendiendo a algo, amor, arte, melancolía... Somos nosotros los observadores de nuestra propia existencia y a través de nuestro enfoque, atención, acción y expresión navegamos esta infinita matriz de información. Desde donde estas decidiendo relacionarte con el mundo que te rodea? Cómo es tu estado interno antes de que el mundo influya en el? Que está succediendo dentro de tu cuerpo? Cual es tu química, tu biología, tu fuerza, tu flexibilidad? Como se encuentra tu organismo? En gozo por estar vivo? O con miedo a que le succeda algo? No subestimes el poder que tienes en todo el conjunto que eres. Desde músculos a pensamientos. Desde emociones a celulas. Desde como me comunico con los demas hasta como me trato en la intimidad. Todo esta conectado.
          </p>
          <svg className='phrase w-32 h-32 text-right fill-foreground stroke-foreground' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M382 136c-40.87 0-73.46 20.53-93.6 37.76l-.71.61-11.47 12.47 25.32 41.61 18.74-18.79C339.89 193.1 361.78 184 382 184c40.8 0 74 32.3 74 72s-33.2 72-74 72c-62 0-104.14-81.95-104.56-82.78C275 240.29 221.56 136 130 136 62.73 136 8 189.83 8 256s54.73 120 122 120c32.95 0 65.38-13.11 93.79-37.92l.61-.54 11.38-12.38-25.33-41.61-18.83 18.88C172 319.4 151.26 328 130 328c-40.8 0-74-32.3-74-72s33.2-72 74-72c62 0 104.14 81.95 104.56 82.78C237 271.71 290.44 376 382 376c67.27 0 122-53.83 122-120s-54.73-120-122-120Z"/></svg>
          <BottomBlur sticky />
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
