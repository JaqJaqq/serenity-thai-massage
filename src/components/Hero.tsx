export default function Hero() {
  return (
    <section id="home" class="scroll-mt-24 bg-transparent">
      <div class="section-shell flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div class="relative isolate mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-serenity-gold/35 bg-serenity-brown px-6 py-12 text-center text-white shadow-gold sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,217,141,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(155,47,59,0.16),transparent_34%)]" />
          <p class="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-serenity-gold-light sm:text-sm">
            Luxury Thai massage in England
          </p>
          <h1 class="mx-auto max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Thai wellness with a warm, elegant touch.
          </h1>
          <div class="mx-auto mt-6 h-1 w-28 rounded-full gold-gradient" />
          <p class="mx-auto mt-7 max-w-2xl text-base leading-8 text-serenity-cream sm:text-lg">
            Serenity Thai Massage offers calm, professional treatments inspired by traditional Thai
            techniques, warm hospitality, and a premium spa atmosphere.
          </p>
          <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
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
      </div>
    </section>
  );
}
