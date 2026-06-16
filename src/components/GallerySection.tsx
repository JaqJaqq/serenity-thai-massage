import { createMemo, createSignal } from 'solid-js';
import { galleryPages } from '../data/galleryImages';
import GalleryGrid from './GalleryGrid';

export default function GallerySection() {
  const [currentPage, setCurrentPage] = createSignal(0);
  const [touchStartX, setTouchStartX] = createSignal<number | null>(null);
  const pageCount = () => galleryPages.length;
  const activeImages = createMemo(() => galleryPages[currentPage()] ?? []);
  const canPaginate = () => pageCount() > 1;

  const goToPage = (page: number) => {
    if (pageCount() === 0) {
      return;
    }

    const nextPage = (page + pageCount()) % pageCount();
    setCurrentPage(nextPage);
  };

  const handleTouchEnd = (event: TouchEvent) => {
    const startX = touchStartX();
    const endX = event.changedTouches[0]?.clientX;

    if (startX === null || endX === undefined) {
      return;
    }

    const distance = startX - endX;

    if (Math.abs(distance) > 48) {
      goToPage(currentPage() + (distance > 0 ? 1 : -1));
    }

    setTouchStartX(null);
  };

  return (
    <section id="gallery" class="scroll-mt-24 bg-serenity-ivory">
      <div class="section-shell">
        <h2 class="sr-only">Gallery</h2>
        <div
          class="overflow-hidden"
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
          onTouchEnd={handleTouchEnd}
        >
          <GalleryGrid images={activeImages()} />
        </div>

        {canPaginate() && (
          <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              class="red-gradient inline-flex h-11 min-w-28 items-center justify-center rounded-full px-5 text-sm font-bold text-white shadow-red hover:brightness-110"
              onClick={() => goToPage(currentPage() - 1)}
              aria-label="Show previous gallery page"
            >
              Previous
            </button>

            <div class="flex items-center gap-4">
              <p class="rounded-full border border-serenity-gold/40 bg-white/70 px-4 py-2 text-sm font-bold text-serenity-brown">
                {currentPage() + 1} / {pageCount()}
              </p>
              <div class="flex items-center gap-2">
                {galleryPages.map((_, index) => (
                  <button
                    type="button"
                    class={
                      currentPage() === index
                        ? 'h-3 w-8 rounded-full bg-serenity-red shadow-red'
                        : 'h-3 w-3 rounded-full bg-serenity-gold/55 hover:bg-serenity-red'
                    }
                    aria-label={`Show gallery page ${index + 1}`}
                    aria-current={currentPage() === index ? 'page' : undefined}
                    onClick={() => goToPage(index)}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              class="red-gradient inline-flex h-11 min-w-28 items-center justify-center rounded-full px-5 text-sm font-bold text-white shadow-red hover:brightness-110"
              onClick={() => goToPage(currentPage() + 1)}
              aria-label="Show next gallery page"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
