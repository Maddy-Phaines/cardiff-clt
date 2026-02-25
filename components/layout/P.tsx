type Props = React.ComponentProps<"p">;
export function P({ children, className = "", ...props }: Props) {
  return (
    <p className={`max-w-2xl leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  );
}
