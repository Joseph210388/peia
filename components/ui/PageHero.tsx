import Image from "next/image";

interface PageHeroProps {
  src: string;
  alt: string;
}

export default function PageHero({ src, alt }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full bg-zinc-200 aspect-3/1 sm:aspect-6/1">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
