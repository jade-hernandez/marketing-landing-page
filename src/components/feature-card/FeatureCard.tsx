type FeatureCardProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

function FeatureCard({ icon, heading, description }: FeatureCardProps) {
  return (
    <div className='flex items-start gap-5 lg:max-w-148'>
      <div className='min-w-12 overflow-hidden rounded-full shadow-[0_1px_5px_-1px_rgba(0,0,0,0.1),0_2px_3px_-1px_rgba(0,0,0,0.05)]'>
        {icon}
      </div>
      <div className='flex flex-col gap-2 py-2.5'>
        <span className='text-lg font-semibold text-neutral-900'>{heading}</span>
        <p className='text-base text-neutral-600'>{description}</p>
      </div>
    </div>
  );
}

export { FeatureCard };
