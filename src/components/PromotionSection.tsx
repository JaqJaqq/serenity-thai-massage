import { promotionImages } from '../data/sectionImages';
import SectionHeading from './SectionHeading';

const promotionImage = promotionImages[0];

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
    validity: 'Weekday offer',
    cta: 'View weekday deal',
  },
  {
    title: 'Couple Massage Special',
    description: 'A shared spa experience designed for two guests to relax together.',
    validity: 'Limited availability',
    cta: 'See couple offer',
  },
  {
    title: 'Loyalty Reward',
    description: 'A future reward concept for returning guests and regular wellness routines.',
    validity: 'Loyalty reward',
    cta: 'Learn more',
  },
];

export default function PromotionSection() {
  return (
    <section id="promotion" class="scroll-mt-24 bg-serenity-cream">
      <div class="section-shell">
        <div class="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Promotion"
              title="Seasonal offers and relaxation packages."
              description="Explore current offer ideas and contact the shop for availability, terms, and the best treatment for your visit."
            />
            {promotionImage && (
              <div class="mx-auto mt-8 max-w-sm rounded-3xl border border-serenity-gold/35 bg-serenity-ivory p-3 shadow-gold sm:max-w-md lg:mx-0">
                <img
                  src={promotionImage.src}
                  alt={promotionImage.alt}
                  class="max-h-[30rem] w-full rounded-2xl object-contain"
                  loading="lazy"
                />
              </div>
            )}
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
