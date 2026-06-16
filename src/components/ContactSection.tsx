import SectionHeading from './SectionHeading';

const contactDetails = [
  {
    label: 'Phone',
    value: '07851066355',
    href: 'tel:07851066355',
  },
  {
    label: 'Facebook',
    value: 'Serenity Thai Massage, Monkseaton',
  },
  {
    label: 'Email',
    value: 'serenitythaimassageandspa@gmail.com',
    href: 'mailto:serenitythaimassageandspa@gmail.com',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" class="scroll-mt-24 bg-serenity-ivory">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Visit Serenity Thai Massage."
            description="Find us in Monkseaton for traditional Thai massage, relaxing treatments, and a calm premium spa atmosphere."
          />

          <div class="mt-8 overflow-hidden rounded-2xl border border-serenity-gold/35 bg-white shadow-soft">
            <div class="red-gradient px-6 py-4">
              <p class="font-bold text-white">Opening Hours</p>
            </div>
            <div class="space-y-4 p-6">
              <div class="rounded-2xl bg-serenity-cream p-5">
                <p class="text-sm font-bold uppercase tracking-[0.18em] text-serenity-red">Open</p>
                <p class="mt-2 text-2xl font-bold text-serenity-brown">9:00 AM - 6:00 PM</p>
              </div>
              <div class="grid gap-3 text-sm sm:grid-cols-2">
                <div class="rounded-xl border border-serenity-gold/30 bg-serenity-ivory px-4 py-3">
                  <p class="font-bold text-serenity-brown">Monday - Saturday</p>
                  <p class="mt-1 text-serenity-cocoa">Open as usual</p>
                </div>
                <div class="rounded-xl border border-serenity-red/35 bg-serenity-red/10 px-4 py-3">
                  <p class="font-bold text-serenity-red">Sunday: Closed</p>
                  <p class="mt-1 text-serenity-cocoa">Closed for the day</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-2xl border border-serenity-gold/35 bg-white shadow-soft">
          <div class="red-gradient px-6 py-4">
            <p class="font-bold text-white">Contact Details</p>
          </div>
          <div class="grid gap-4 p-6">
            {contactDetails.map((item) => (
              <div class="rounded-2xl border border-serenity-gold/25 bg-serenity-ivory p-5">
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-serenity-red">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    class="mt-2 block break-words text-lg font-bold text-serenity-brown hover:text-serenity-red"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p class="mt-2 break-words text-lg font-bold text-serenity-brown">{item.value}</p>
                )}
              </div>
            ))}

            <div class="rounded-2xl border border-serenity-gold/25 bg-serenity-cream p-5">
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-serenity-red">Address</p>
              <address class="mt-2 not-italic leading-7 text-serenity-brown">
                <span class="block font-bold">Serenity Thai Massage</span>
                <span class="block">17a Front Street Monkseaton Whiteley Bay</span>
                <span class="block">Tyne and Wear NE 25 8AQ</span>
                <span class="block text-serenity-cocoa">(Coronation Crescent)</span>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
