export default function GoldButton({ children, variant = "solid", ...props }) {
  const base = "rounded-full px-8 py-3 text-sm font-semibold transition-shadow";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-onyx hover:shadow-goldHover"
      : "border border-gold/40 text-gold hover:bg-gold/10";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}
