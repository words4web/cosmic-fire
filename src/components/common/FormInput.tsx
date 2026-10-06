import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export function FormInput({
  label,
  registration,
  error,
  type = "text",
  className = "",
  ...rest
}: FormInputProps) {
  return (
    <div>
      <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#171B18] font-semibold mb-1.5">
        {label}
      </label>
      <input
        type={type}
        {...registration}
        {...rest}
        className={`w-full px-4 py-2.5 rounded-xl bg-[#F8F5ED] border text-sm text-[#171B18] outline-none transition-colors ${
          error
            ? "border-rose-500 bg-rose-50/30"
            : "border-[#E7DED0] focus:border-[#FF4D0A]"
        } ${className}`}
      />
      {error && (
        <span className="text-[11px] text-rose-600 mt-1 block">
          {error?.message}
        </span>
      )}
    </div>
  );
}
