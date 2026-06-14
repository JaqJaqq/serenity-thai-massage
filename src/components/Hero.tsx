import ImagePlaceholder from './ImagePlaceholder';

export default function Hero() {
  return (
    <section id="home" class="scroll-mt-24 bg-transparent">
      <div class="section-shell grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div class="max-w-2xl rounded-3xl border border-serenity-gold/35 bg-serenity-brown p-6 text-white shadow-gold sm:p-8 lg:p-10">
          <p class="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-serenity-gold-light">
            Luxury Thai massage in England
          </p>
          <h1 class="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Thai wellness with a warm, elegant touch.
          </h1>
          <div class="mt-5 h-1 w-24 rounded-full gold-gradient" />
          <p class="mt-6 max-w-xl text-base leading-8 text-serenity-cream sm:text-lg">
            Serenity Thai Massage offers calm, professional treatments inspired by traditional Thai
            techniques, warm hospitality, and a premium spa atmosphere.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#price"
              class="red-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white shadow-red hover:brightness-110"
            >
              View prices
            </a>
            <a
              href="#services"
              class="inline-flex items-center justify-center rounded-full border border-serenity-gold/70 bg-serenity-ivory/90 px-6 py-3 text-sm font-bold text-serenity-brown hover:border-serenity-red hover:bg-serenity-red hover:text-white"
            >
              Explore treatments
            </a>
          </div>
        </div>

        <ImagePlaceholder label="Hero spa photo placeholder" folder="src/assets/images/hero" class="min-h-[22rem] lg:min-h-[32rem]" />
      </div>
    </section>
  );
}
