import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Blog | PEIA",
  description:
    "Artículos y recursos sobre pedagogía artística, crianza respetuosa e inclusión infantil.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        <PageHero
          src="/blog-hero.svg"
          alt="Blog PEIA - artículos sobre pedagogía artística"
        />
        <div className="mx-auto flex min-h-[calc(100vh-20rem)] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
        <div
          className="mb-8 w-40 sm:w-48"
          aria-hidden
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
            className="w-full"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="#fef3c7"
              stroke="#f5c842"
              strokeWidth="2"
            />
            <g transform="translate(60, 55)">
              <path
                d="M40 5 L75 85 L5 85 Z"
                fill="#f5c842"
                stroke="#3f3f46"
                strokeWidth="2"
              />
              <line
                x1="40"
                y1="5"
                x2="40"
                y2="85"
                stroke="#3f3f46"
                strokeWidth="1.5"
              />
              <rect
                x="32"
                y="82"
                width="16"
                height="8"
                rx="1"
                fill="#3f3f46"
              />
            </g>
            <g transform="translate(105, 70)">
              <rect
                x="0"
                y="35"
                width="50"
                height="8"
                rx="2"
                fill="#3f3f46"
                transform="rotate(-45 25 39)"
              />
              <rect
                x="20"
                y="15"
                width="10"
                height="55"
                rx="2"
                fill="#3f3f46"
              />
              <rect
                x="15"
                y="10"
                width="20"
                height="8"
                rx="2"
                fill="#71717a"
              />
            </g>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-peia-dark sm:text-3xl">
          En construcción
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-zinc-600">
          Estamos trabajando en esta sección. Pronto encontrarás aquí artículos
          y recursos sobre pedagogía artística, crianza respetuosa e inclusión
          infantil.
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          ¡Vuelve pronto!
        </p>
        </div>
      </main>
    </div>
  );
}
