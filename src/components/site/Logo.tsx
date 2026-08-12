type Props = {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
};

/**
 * Ajumi Internet lockup: an "A" formed from a signal arc + fiber strand.
 * Reads cleanly at 24px in the nav and scales to hero size.
 */
export function Logo({ className, variant = "dark", showWordmark = true }: Props) {
  const ink = variant === "dark" ? "currentColor" : "currentColor";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M16 4 L28 28 H22.2 L16 13.6 L9.8 28 H4 Z" fill={ink} />
        <rect x="11" y="21" width="10" height="3.2" rx="1.6" fill="var(--color-primary)" />
      </svg>
      {showWordmark && (
        <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.02em]">
          Ajumi<span className="text-primary">.</span>
          <span className="font-normal">Internet</span>
        </span>
      )}
    </span>
  );
}
