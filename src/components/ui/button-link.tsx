import Link from "next/link";

type ButtonLinkVariant = "primary" | "secondary" | "quiet";

type ButtonLinkProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  href: string;
  variant?: ButtonLinkVariant;
}>;

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      className={["button-link", `button-link--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      href={href}
    >
      {children}
    </Link>
  );
}
