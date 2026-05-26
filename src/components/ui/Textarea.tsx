import { cn } from "../../utils/utils";

type TextareaProps = {
  name: string;
  label: string;
  value: string;
  maxLength?: number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  hasError?: boolean;
  errorMessage?: string;
  isDisabled?: boolean;
};

function Textarea({
  name,
  label,
  value,
  maxLength = 500,
  placeholder,
  onChange,
  hasError,
  errorMessage,
  isDisabled
}: TextareaProps) {
  return (
    <div className='flex flex-col gap-1.5'>
      <label
        htmlFor={name}
        className='text-sm font-medium text-neutral-700'
      >
        {label}
      </label>
      <textarea
        id={name}
        rows={4}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        disabled={isDisabled}
        aria-invalid={!!hasError}
        aria-describedby={hasError && errorMessage ? `${name}-error` : `${name}-count`}
        className={cn(
          "resize-none rounded-lg border bg-neutral-50 px-3.5 py-3 text-sm text-neutral-500 outline-none placeholder:text-neutral-500 focus:text-neutral-900 focus:shadow-[0_0px_0px_1px_rgba(68,76,231,1),0_0px_0px_4px_rgba(68,76,231,0.12)] disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400",
          hasError ? "border-red-500" : "border-neutral-200",
          isDisabled && "cursor-not-allowed opacity-50"
        )}
      />
      {hasError && errorMessage ? (
        <span
          id={`${name}-error`}
          className='text-sm text-red-500'
          aria-live='polite'
        >
          {errorMessage}
        </span>
      ) : (
        <span
          id={`${name}-count`}
          className='self-end text-sm text-neutral-500'
          aria-live='polite'
        >
          {value.length}/{maxLength}
        </span>
      )}
    </div>
  );
}

export { Textarea };
