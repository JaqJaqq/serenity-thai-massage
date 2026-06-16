type LogoModules = Record<string, { default: string }>;

const logoModules = import.meta.glob<{ default: string }>(
  '../assets/images/logo/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
) as LogoModules;

export const logoImage = Object.entries(logoModules)
  .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
  .map(([, image]) => image.default)[0];
