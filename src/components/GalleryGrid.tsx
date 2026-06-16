import { For } from 'solid-js';
import type { GalleryImage } from '../data/galleryImages';
import GalleryCard from './GalleryCard';

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid(props: GalleryGridProps) {
  return (
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <For each={props.images}>{(image) => <GalleryCard image={image} />}</For>
    </div>
  );
}
