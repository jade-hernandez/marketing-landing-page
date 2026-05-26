import { RiCheckFill } from "react-icons/ri";

import { Button } from "../../components/ui/Button";

type FormSuccessProps = {
  onReset: () => void;
  ref?: React.Ref<HTMLDivElement>;
};

function FormSuccess({ onReset, ref }: FormSuccessProps) {
  return (
    <div
      ref={ref}
      tabIndex={-1}
      className='flex w-full max-w-[calc(50%-16px)] flex-col rounded-lg border border-neutral-200 px-8 py-18.25 shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]'
      role='status'
    >
      <div className='flex flex-col items-center gap-16 px-25.25'>
        <div className='flex flex-col items-center gap-6'>
          <div className='flex size-16 items-center justify-center rounded-full bg-white text-green-700 shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]'>
            <RiCheckFill
              className='size-8'
              aria-hidden='true'
            />
          </div>
          <p className='text-center text-xl text-neutral-900'>
            Submission successful! We will get back to you in 3-5 days via email.
          </p>
        </div>
        <Button
          type='button'
          variant='secondary'
          size='md'
          onClick={onReset}
        >
          Send another message
        </Button>
      </div>
    </div>
  );
}

export { FormSuccess };
