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
      <label className="block text-[11px] sm:text-xs font-semibold text-[#171B18]/90 tracking-tight mb-1 font-sans">
        {label}
      </label>
      <input
        type={type}
        {...registration}
        {...rest}
        className={`w-full px-3 py-2 rounded-lg bg-white border text-xs sm:text-sm text-[#171B18] font-sans outline-none transition-all shadow-2xs focus:ring-2 focus:ring-[#FC7A21]/15 ${
          error
            ? "border-rose-400 bg-rose-50/20"
            : "border-[#E2D9CC] hover:border-[#D1C5B5] focus:border-[#FC7A21]"
        } ${className}`}
      />
      {error && (
        <span className="text-[10px] text-rose-600 mt-0.5 block font-sans">
          {error?.message}
        </span>
      )}
    </div>
  );
}
