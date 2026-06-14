import SectionHeading from './SectionHeading';

const services = [
  {
    title: 'Traditional Thai Massage',
    description: 'A restorative treatment using stretching, pressure, and rhythmic movement.',
  },
  {
    title: 'Aromatherapy Massage',
    description: 'A gentle, calming session designed to ease tension and promote relaxation.',
  },
  {
    title: 'Deep Tissue Massage',
    description: 'Focused pressure for areas of stiffness, fatigue, and everyday muscle tension.',
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" class="scroll-mt-24 bg-serenity-cream">
      <div class="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Treatments designed for deep relaxation."
          description="A simple preview of the services area. Full treatment descriptions, durations, and therapist notes can be added later."
          align="center"
        />

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article class="overflow-hidden rounded-2xl border border-serenity-gold/30 bg-serenity-ivory shadow-soft">
              <div class="red-gradient px-6 py-4">
                <h3 class="text-lg font-bold text-white">{service.title}</h3>
              </div>
              <div class="p-6">
                <div class="mb-5 h-1 w-16 rounded-full gold-gradient" />
              <p class="mt-3 text-sm leading-7 text-serenity-cocoa">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
