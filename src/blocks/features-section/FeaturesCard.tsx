import type { FeatureCardProps } from "./features-data";

function FeatureCard({ icon: Icon, title, content }: FeatureCardProps) {
  return (
    <article className='mx-auto flex w-full max-w-md flex-col items-center justify-center gap-5 md:max-w-[calc(50%-16px)] lg:max-w-[384px]'>
      <Icon aria-hidden='true' />
      <div className='flex flex-col gap-2 text-center'>
        <h3 className='text-xl font-semibold text-neutral-900'>{title}</h3>
        <p className='text-base text-neutral-600'>{content}</p>
      </div>
    </article>
  );
}

export { FeatureCard };
