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
  const linkClassName = ["button-link", `button-link--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  if (href.startsWith("#")) {
    return (
      <a className={linkClassName} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={linkClassName} href={href}>
      {children}
    </Link>
  );
}
