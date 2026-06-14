type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading(props: SectionHeadingProps) {
  const isCentered = () => props.align === 'center';

  return (
    <div class={isCentered() ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p class="text-xs font-bold uppercase tracking-[0.22em] text-serenity-red">{props.eyebrow}</p>
      <div class={isCentered() ? 'mx-auto mt-3 h-1 w-20 rounded-full gold-gradient' : 'mt-3 h-1 w-20 rounded-full gold-gradient'} />
      <h2 class="mt-5 font-serif text-3xl leading-tight text-serenity-brown sm:text-4xl lg:text-5xl">
        {props.title}
      </h2>
      {props.description && (
        <p class="mt-5 text-base leading-8 text-serenity-cocoa sm:text-lg">{props.description}</p>
      )}
    </div>
  );
}
