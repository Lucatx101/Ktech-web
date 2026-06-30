type ContainerProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={["site-container", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
