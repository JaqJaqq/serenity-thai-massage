import { createSignal } from 'solid-js';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Price', href: '#price' },
  { label: 'Promotion', href: '#promotion' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = createSignal(false);
  const closeMenu = () => setIsOpen(false);
  const handleNavClick = (event: MouseEvent, href: string) => {
    if (!href.startsWith('#')) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();
    window.history.pushState(null, '', href);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header class="sticky top-0 z-20 border-b border-serenity-gold/30 bg-serenity-brown/95 shadow-sm backdrop-blur">
      <nav class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-4">
          <a
            href="#home"
            class="min-w-0 shrink text-base font-bold tracking-wide text-serenity-gold-light sm:text-xl"
            onClick={(event) => handleNavClick(event, '#home')}
          >
            Serenity Thai Massage
          </a>

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-serenity-gold/45 bg-serenity-red text-white shadow-red md:hidden"
            aria-expanded={isOpen()}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="flex flex-col gap-1.5">
              <span class="block h-0.5 w-5 rounded-full bg-white" />
              <span class="block h-0.5 w-5 rounded-full bg-white" />
              <span class="block h-0.5 w-5 rounded-full bg-white" />
            </span>
          </button>

          <div
            id="primary-navigation"
            class="hidden items-center gap-6 text-sm font-semibold text-serenity-cream md:flex lg:gap-8"
          >
            {navItems.map((item) => (
              <a
                href={item.href}
                class="hover:text-serenity-gold-light focus-visible:text-serenity-gold-light active:text-serenity-red-soft"
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div class={isOpen() ? 'mt-4 grid gap-2 rounded-2xl border border-serenity-gold/35 bg-serenity-ivory/95 p-3 shadow-gold md:hidden' : 'hidden'}>
          {navItems.map((item) => (
            <a
              href={item.href}
              class="rounded-xl px-4 py-3 text-sm font-semibold text-serenity-brown hover:bg-serenity-red hover:text-white focus-visible:bg-serenity-red focus-visible:text-white"
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
