import { priceImages } from '../data/sectionImages';
import SectionHeading from './SectionHeading';

const priceImage = priceImages[0];

type PriceItem = {
  name: string;
  prices: {
    thirty: string;
    sixty: string;
    ninety: string;
    oneTwenty: string;
  };
};

const priceItems: PriceItem[] = [
  {
    name: 'Thai Traditional',
    prices: { thirty: '£27', sixty: '£42', ninety: '£60', oneTwenty: '£82' },
  },
  {
    name: 'Thai Oil',
    prices: { thirty: '£27', sixty: '£42', ninety: '£60', oneTwenty: '£82' },
  },
  {
    name: 'Deep Tissue',
    prices: { thirty: '£27', sixty: '£42', ninety: '£60', oneTwenty: '£82' },
  },
  {
    name: 'Swedish',
    prices: { thirty: '£27', sixty: '£42', ninety: '£60', oneTwenty: '£82' },
  },
  {
    name: 'Couples (same time, same room)',
    prices: { thirty: '£49', sixty: '£82', ninety: '£112', oneTwenty: '£160' },
  },
  {
    name: 'Hot Stones Addition',
    prices: { thirty: '£5', sixty: '£5', ninety: '£5', oneTwenty: '£5' },
  },
  {
    name: '3 in 1 Thai, Swedish and Hot Stones',
    prices: { thirty: '', sixty: '£47', ninety: '£65', oneTwenty: '£87' },
  },
  {
    name: 'Head, Neck Shoulder and Foot',
    prices: { thirty: '£27', sixty: '£42', ninety: '£60', oneTwenty: '£82' },
  },
];

export default function PriceSection() {
  return (
    <section id="price" class="scroll-mt-24 bg-serenity-ivory">
      <div class="section-shell">
        <SectionHeading
          eyebrow="Price"
          title="Massage prices in GBP."
          description="Clear treatment pricing with common durations for traditional Thai massage, oil massage, deep tissue, and relaxing combinations."
          align="center"
        />

        {priceImage && (
          <div class="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-serenity-gold/35 bg-white shadow-gold">
            <img
              src={priceImage.src}
              alt={priceImage.alt}
              class="h-auto max-h-[42rem] w-full object-contain"
              loading="lazy"
            />
          </div>
        )}

        <div class="mt-10 grid gap-4 lg:hidden">
          {priceItems.map((item) => (
            <article class="overflow-hidden rounded-2xl border border-serenity-gold/30 bg-white shadow-soft">
              <div class="red-gradient px-5 py-4">
                <h3 class="text-lg font-bold text-white">{item.name}</h3>
              </div>
              <div class="p-5">
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
