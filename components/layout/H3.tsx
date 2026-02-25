type Props = React.ComponentProps<"h3">;

export const H3 = ({ children, className = "", ...props }: Props) => {
  return <h3 className={`text-xl md:text-2xl ${className}`}>{children}</h3>;
};
