import type { GalleryImage } from '../data/galleryImages';

type GalleryCardProps = {
  image: GalleryImage;
};

export default function GalleryCard(props: GalleryCardProps) {
  return (
    <figure class="aspect-[4/3] overflow-hidden rounded-2xl border border-serenity-gold/35 bg-serenity-ivory shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-gold">
      {/* Add or replace real gallery images in src/assets/images/gallery; src/data/galleryImages.ts imports them automatically. */}
      <img
        src={props.image.src}
        alt={props.image.alt}
        class="h-full w-full object-cover"
        loading="lazy"
      />
    </figure>
  );
}
