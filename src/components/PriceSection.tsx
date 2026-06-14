import SectionHeading from './SectionHeading';

type PriceItem = {
  name: string;
  description: string;
  prices: {
    thirty: string;
    sixty: string;
    ninety: string;
    oneTwenty: string;
  };
};

const priceItems: PriceItem[] = [
  {
    name: 'Traditional Thai Massage',
    description: 'Classic Thai pressure and assisted stretching to restore balance.',
    prices: { thirty: '£30', sixty: '£55', ninety: '£78', oneTwenty: '£98' },
  },
  {
    name: 'Aromatherapy Oil Massage',
    description: 'A gentle oil massage for calm, comfort, and full-body relaxation.',
    prices: { thirty: '£32', sixty: '£60', ninety: '£85', oneTwenty: '£110' },
  },
  {
    name: 'Deep Tissue Massage',
    description: 'Focused pressure for muscle tightness, stiffness, and fatigue.',
    prices: { thirty: '£35', sixty: '£65', ninety: '£92', oneTwenty: '£120' },
  },
  {
    name: 'Thai Foot Massage',
    description: 'Foot and lower-leg massage to ease tiredness and improve comfort.',
    prices: { thirty: '£28', sixty: '£50', ninety: '£72', oneTwenty: '£92' },
  },
  {
    name: 'Head, Neck & Shoulder Massage',
    description: 'Targeted relief for desk tension and everyday upper-body strain.',
    prices: { thirty: '£28', sixty: '£52', ninety: '£75', oneTwenty: '£95' },
  },
  {
    name: 'Couple Massage',
    description: 'A shared relaxation session for two guests in a calming setting.',
    prices: { thirty: '£55', sixty: '£105', ninety: '£150', oneTwenty: '£195' },
  },
];

export default function PriceSection() {
  return (
    <section id="price" class="scroll-mt-24 bg-serenity-ivory">
      <div class="section-shell">
        <SectionHeading
          eyebrow="Price"
          title="Simple sample pricing in GBP."
          description="Placeholder prices are shown for structure only. Final durations, prices, and terms can be updated when the service menu is confirmed."
          align="center"
        />

        <div class="mt-10 grid gap-4 lg:hidden">
          {priceItems.map((item) => (
            <article class="overflow-hidden rounded-2xl border border-serenity-gold/30 bg-white shadow-soft">
              <div class="red-gradient px-5 py-4">
                <h3 class="text-lg font-bold text-white">{item.name}</h3>
              </div>
              <div class="p-5">
                <p class="text-sm leading-6 text-serenity-cocoa">{item.description}</p>
                <div class="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div class="rounded-xl bg-serenity-cream p-3">
                    <span class="block font-bold text-serenity-red">30 mins</span>
                    <span class="text-lg font-bold text-serenity-brown">{item.prices.thirty}</span>
                  </div>
                  <div class="rounded-xl bg-serenity-cream p-3">
                    <span class="block font-bold text-serenity-red">60 mins</span>
                    <span class="text-lg font-bold text-serenity-brown">{item.prices.sixty}</span>
                  </div>
                  <div class="rounded-xl bg-serenity-cream p-3">
                    <span class="block font-bold text-serenity-red">90 mins</span>
                    <span class="text-lg font-bold text-serenity-brown">{item.prices.ninety}</span>
                  </div>
                  <div class="rounded-xl bg-serenity-cream p-3">
                    <span class="block font-bold text-serenity-red">120 mins</span>
                    <span class="text-lg font-bold text-serenity-brown">{item.prices.oneTwenty}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div class="mt-10 hidden overflow-hidden rounded-3xl border border-serenity-gold/35 bg-white shadow-gold lg:block">
          <table class="w-full border-collapse text-left">
            <thead class="red-gradient text-white">
              <tr>
                <th class="px-6 py-5 text-2xl font-bold">Massage</th>
                <th class="px-4 py-5 text-center text-xl font-bold">30<span class="block text-xs uppercase">mins</span></th>
                <th class="px-4 py-5 text-center text-xl font-bold">60<span class="block text-xs uppercase">mins</span></th>
                <th class="px-4 py-5 text-center text-xl font-bold">90<span class="block text-xs uppercase">mins</span></th>
                <th class="px-4 py-5 text-center text-xl font-bold">120<span class="block text-xs uppercase">mins</span></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-serenity-gold/20 text-serenity-brown">
              {priceItems.map((item) => (
                <tr class="transition hover:bg-serenity-cream/70">
                  <td class="px-6 py-5">
                    <p class="text-lg font-bold text-serenity-brown">{item.name}</p>
                    <p class="mt-1 max-w-xl text-sm leading-6 text-serenity-cocoa">{item.description}</p>
                  </td>
                  <td class="px-4 py-5 text-center text-lg font-bold">{item.prices.thirty}</td>
                  <td class="px-4 py-5 text-center text-lg font-bold text-serenity-red">{item.prices.sixty}</td>
                  <td class="px-4 py-5 text-center text-lg font-bold">{item.prices.ninety}</td>
                  <td class="px-4 py-5 text-center text-lg font-bold">{item.prices.oneTwenty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
