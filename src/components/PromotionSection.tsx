import ImagePlaceholder from './ImagePlaceholder';
import SectionHeading from './SectionHeading';

type Promotion = {
  title: string;
  description: string;
  validity: string;
  cta: string;
};

const promotions: Promotion[] = [
  {
    title: 'New Customer Welcome Offer',
    description: 'A warm introductory offer for first-time guests visiting Serenity Thai Massage.',
    validity: 'Validity to be confirmed',
    cta: 'Ask about offer',
  },
  {
    title: 'Weekday Relaxation Package',
    description: 'A quieter weekday treatment package for guests who prefer a slower pace.',
    validity: 'Weekday terms placeholder',
    cta: 'View weekday deal',
  },
  {
    title: 'Couple Massage Special',
    description: 'A shared spa experience designed for two guests to relax together.',
    validity: 'Limited availability placeholder',
    cta: 'See couple offer',
  },
  {
    title: 'Loyalty Reward',
    description: 'A future reward concept for returning guests and regular wellness routines.',
    validity: 'Loyalty terms placeholder',
    cta: 'Learn more',
  },
];

export default function PromotionSection() {
  return (
    <section id="promotion" class="scroll-mt-24 bg-serenity-cream">
      <div class="section-shell">
        <div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Promotion"
              title="Seasonal offers prepared for future updates."
              description="These placeholder promotions show how the page can present offers without adding booking or payment logic."
            />
            <ImagePlaceholder
              label="Promotion image placeholder"
              folder="src/assets/images/promotions"
              class="mt-8 hidden min-h-[18rem] lg:block"
            />
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            {promotions.map((promotion) => (
              <article class="overflow-hidden rounded-2xl border border-serenity-gold/30 bg-serenity-ivory shadow-soft">
                <div class="red-gradient px-6 py-4">
                  <p class="text-xs font-bold uppercase tracking-[0.18em] text-serenity-gold-light">{promotion.validity}</p>
                  <h3 class="mt-3 text-xl font-bold text-white">{promotion.title}</h3>
                </div>
                <div class="p-6">
                <p class="text-sm leading-7 text-serenity-cocoa">{promotion.description}</p>
                <a
                  href="#contact"
                  class="red-gradient mt-6 inline-flex rounded-full px-4 py-2 text-sm font-bold text-white shadow-red hover:brightness-110"
                >
                  {promotion.cta}
                </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
