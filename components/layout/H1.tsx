type Props = React.ComponentProps<"h2">;

export const H1 = ({ children, className = "", ...props }: Props) => {
  return (
    <h1 className={`text-3xl md:text-5xl ${className}`} {...props}>
      {children}
    </h1>
  );
};
