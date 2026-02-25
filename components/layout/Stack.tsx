type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};
export const Stack = ({ children, size = "md", className = "" }: Props) => {
  const sizes = {
    sm: "space-y-3",
    md: "space-y-4",
    lg: "space-y-8",
    xl: "space-y-12",
  };

  return <div className={`${sizes[size]} ${className}`}>{children}</div>;
};
