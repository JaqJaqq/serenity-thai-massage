import ImagePlaceholder from './ImagePlaceholder';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" class="scroll-mt-24 bg-serenity-ivory">
      <div class="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ImagePlaceholder label="About room photo placeholder" folder="src/assets/images/about" class="min-h-[20rem]" />

        <div>
          <SectionHeading
            eyebrow="About"
            title="A calm Thai spa experience close to home."
            description="Serenity Thai Massage is being prepared as a welcoming local massage shop focused on relaxation, care, and attentive service."
          />
          <div class="mt-8 rounded-2xl border border-serenity-gold/25 bg-white/70 p-6 text-base leading-8 text-serenity-cocoa shadow-sm">
            <p>
              The visual direction combines traditional Thai warmth with a modern premium feel: soft ivory
              backgrounds, gold details, muted red accents, and comfortable spacing.
            </p>
            <p>
              Real shop photography, therapist details, opening hours, and final treatment copy can be added
              cleanly in later phases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
