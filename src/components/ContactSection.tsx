import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" class="scroll-mt-24 bg-serenity-ivory">
      <div class="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Location and contact details."
            description="Add the shop address, phone number, opening hours, and map details when the business information is ready."
          />
        </div>

        <div class="overflow-hidden rounded-2xl border border-serenity-gold/35 bg-white shadow-soft">
          <div class="red-gradient px-6 py-4">
            <p class="font-bold text-white">Visit Serenity Thai Massage</p>
          </div>
          <dl class="space-y-5 text-sm">
            <div class="px-6 pt-6">
              <dt class="font-bold text-serenity-brown">Address</dt>
              <dd class="mt-1 text-serenity-cocoa">England, United Kingdom</dd>
            </div>
            <div class="px-6">
              <dt class="font-bold text-serenity-brown">Phone</dt>
              <dd class="mt-1 text-serenity-cocoa">To be added</dd>
            </div>
            <div class="px-6 pb-6">
              <dt class="font-bold text-serenity-brown">Opening hours</dt>
              <dd class="mt-1 text-serenity-cocoa">To be added</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
