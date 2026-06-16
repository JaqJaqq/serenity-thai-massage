export type SectionImage = {
  src: string;
  alt: string;
  fileName: string;
};

type ImageModules = Record<string, { default: string }>;

const createImageList = (modules: ImageModules, altPrefix: string): SectionImage[] =>
  Object.entries(modules)
    .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
    .map(([path, image], index) => ({
      src: image.default,
      alt: `${altPrefix} ${index + 1}`,
      fileName: path.split('/').pop() ?? `image-${index + 1}`,
    }));

export const heroImages = createImageList(
  import.meta.glob<{ default: string }>(
    '../assets/images/hero/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
    { eager: true },
  ),
  'Serenity Thai Massage hero image',
);

export const aboutImages = createImageList(
  import.meta.glob<{ default: string }>(
    '../assets/images/about/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
    { eager: true },
  ),
  'Serenity Thai Massage shop and interior image',
);

export const serviceImages = createImageList(
  import.meta.glob<{ default: string }>(
    '../assets/images/services/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
    { eager: true },
  ),
  'Serenity Thai Massage service image',
);

export const priceImages = createImageList(
  import.meta.glob<{ default: string }>(
    '../assets/images/prices/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
    { eager: true },
  ),
  'Serenity Thai Massage price list image',
);

export const promotionImages = createImageList(
  import.meta.glob<{ default: string }>(
    '../assets/images/promotions/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
    { eager: true },
  ),
  'Serenity Thai Massage promotion image',
);
