export type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImageModules = import.meta.glob<{ default: string }>(
  '../assets/images/gallery/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

export const galleryImages: GalleryImage[] = Object.entries(galleryImageModules)
  .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
  .map(([, image], index) => ({
    src: image.default,
    alt: `Serenity Thai Massage gallery image ${index + 1}`,
  }));

const galleryPageSize = Math.ceil(galleryImages.length / 2);

export const galleryPages: GalleryImage[][] =
  galleryImages.length === 0
    ? []
    : [
        galleryImages.slice(0, galleryPageSize),
        galleryImages.slice(galleryPageSize),
      ].filter((page) => page.length > 0);
