import { useTranslations } from "next-intl";

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const Input = ({ label, name, type, placeholder }: InputProps) => {
  const t = useTranslations("Auth");

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-mono text-zinc-300">{t(label)}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-sm border border-zinc-800 px-3 py-1.5 text-sm outline-none focus:ring-sec-teal focus:ring-1 focus:border-sec-teal transition-colors duration-300"
      />
    </div>
  );
};

export default Input;
