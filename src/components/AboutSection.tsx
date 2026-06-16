import { aboutImages } from '../data/sectionImages';
import SectionHeading from './SectionHeading';

const aboutImage =
  aboutImages.find((image) => image.fileName === 'S__34979895.jpg') ?? aboutImages[0];

export default function AboutSection() {
  return (
    <section id="about" class="scroll-mt-24 bg-serenity-ivory">
      <div class="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div class="aspect-[4/3] overflow-hidden rounded-3xl border border-serenity-gold/35 bg-serenity-cream p-3 shadow-gold sm:p-4">
          {aboutImage ? (
            <img
              src={aboutImage.src}
              alt={aboutImage.alt}
              class="h-full w-full rounded-2xl object-contain"
              loading="lazy"
            />
          ) : (
            <div class="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(244,217,141,0.62),transparent_34%),linear-gradient(135deg,rgba(58,37,25,0.2),rgba(211,166,76,0.36),rgba(255,244,223,0.92))]" />
          )}
        </div>

        <div>
          <SectionHeading
            eyebrow="About"
            title="A calm Thai spa experience close to home."
            description="Serenity Thai Massage is a welcoming local massage shop focused on relaxation, care, and attentive service."
          />
          <div class="mt-8 rounded-2xl border border-serenity-gold/25 bg-white/70 p-6 text-base leading-8 text-serenity-cocoa shadow-sm">
            <p>
              The experience combines traditional Thai warmth with a modern premium feel: soft ivory tones,
              gold details, muted red accents, and calm treatment spaces.
            </p>
            <p>
              Every detail is shaped around comfort, professionalism, and a peaceful atmosphere from arrival
              through the end of your treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
