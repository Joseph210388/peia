"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import WorkshopOfferCard from "@/components/features/workshops/WorkshopOfferCard";
import { PEIA_WORKSHOP_CARDS } from "@/lib/peia-workshop-cards";

const GAP_PX = 16;

function slidesVisibleForWidth(innerWidth: number) {
  if (innerWidth >= 1024) return 3;
  if (innerWidth >= 768) return 2;
  return 1;
}

function basisPx(viewportWidth: number, innerWidth: number) {
  const n = slidesVisibleForWidth(innerWidth);
  const gaps = Math.max(0, n - 1) * GAP_PX;
  return Math.max(200, Math.floor((viewportWidth - gaps) / n));
}

export default function WorkshopsSection() {
  const viewportElRef = useRef<HTMLDivElement | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
  });

  const setViewportRef = useCallback(
    (node: HTMLDivElement | null) => {
      viewportElRef.current = node;
      emblaRef(node);
    },
    [emblaRef]
  );

  const [slideBasisPx, setSlideBasisPx] = useState(280);

  // Recalculamos el ancho de cada slide según el viewport del carrusel (Embla necesita tamaños estables).
  useEffect(() => {
    const el = viewportElRef.current;
    if (!el) return;

    const update = () => {
      setSlideBasisPx(basisPx(el.clientWidth, window.innerWidth));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, slideBasisPx]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="talleres-inicio"
      className="relative scroll-mt-24 overflow-hidden bg-peia-cream px-4 py-16 font-sans sm:px-6 lg:px-8"
      aria-labelledby="workshops-heading"
    >
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 bg-peia-yellow/40 blur-3xl blob-deco"
        aria-hidden
      />
      <motion.div
        className="relative mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto w-fit">
          <h2
            id="workshops-heading"
            className="text-center text-3xl font-black text-peia-dark sm:text-4xl"
          >
            Talleres en el centro
          </h2>
          <span className="line-title-underline mt-2 block w-full" />
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-stone-700 sm:text-base">
          Mismas tarjetas que en Talleres: desliza o usa las flechas; bucle infinito.
        </p>

        <div
          className="relative mt-10 sm:mt-12"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Talleres y líneas de trabajo PEIA"
        >
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-peia-teal bg-peia-cream text-peia-dark shadow-color-teal transition hover:bg-peia-yellow-light sm:h-12 sm:w-12 lg:left-1"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-peia-teal bg-peia-cream text-peia-dark shadow-color-teal transition hover:bg-peia-yellow-light sm:h-12 sm:w-12 lg:right-1"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>

          <div
            className="overflow-hidden px-11 sm:px-14 lg:px-16"
            ref={setViewportRef}
          >
            <div
              className="flex touch-pan-y"
              style={{ gap: GAP_PX }}
            >
              {PEIA_WORKSHOP_CARDS.map((card, index) => (
                <div
                  key={card.slug}
                  className="min-w-0 shrink-0 grow-0"
                  style={{ flex: `0 0 ${slideBasisPx}px` }}
                >
                  <WorkshopOfferCard card={card} accentIndex={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
