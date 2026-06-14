type ImagePlaceholderProps = {
  label: string;
  folder: string;
  class?: string;
};

export default function ImagePlaceholder(props: ImagePlaceholderProps) {
  return (
    <div
      class={`relative isolate overflow-hidden rounded-2xl border border-serenity-gold/40 bg-serenity-cream shadow-gold ${props.class ?? ''}`}
    >
      {/* Replace this placeholder by importing a real image from src/assets/images when photos are ready. */}
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,217,141,0.62),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(155,47,59,0.18),transparent_28%),linear-gradient(135deg,rgba(58,37,25,0.2),rgba(211,166,76,0.36),rgba(255,244,223,0.92))]" />
      <div class="absolute right-0 top-0 h-32 w-32 rounded-bl-full border-b border-l border-serenity-gold/30 bg-serenity-gold-light/20" />
      <div class="relative flex h-full min-h-64 flex-col justify-end p-6">
        <div class="max-w-xs rounded-xl border border-serenity-gold/35 bg-serenity-ivory/85 p-4 backdrop-blur">
          <p class="text-sm font-bold text-serenity-brown">{props.label}</p>
          <p class="mt-1 text-xs leading-5 text-serenity-cocoa">Image folder: {props.folder}</p>
        </div>
      </div>
    </div>
  );
}
