import { ParticleFlowerOfLife } from "@/components/Particles";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ParticleFlowerOfLife />
      </div>
    </section>
  );
};

export default Hero;
