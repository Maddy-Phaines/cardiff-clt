type Props = React.ComponentProps<"h2">;

export const H2 = ({ children, className = "", ...props }: Props) => {
  return (
    <h2 className={`text-2xl md:text-3xl font-semibold ${className}`}>
      {children}
    </h2>
  );
};
