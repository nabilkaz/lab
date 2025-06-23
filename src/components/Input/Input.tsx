export default function Input({
  className = "",
  ...delegated
}: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      type="text"
      className={`min-h-[36px] px-3 py-1 rounded-md border border-[#E1E1E1] ${className}`}
      {...delegated}
    />
  );
}
