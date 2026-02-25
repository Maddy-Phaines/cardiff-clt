import { buttonStyles } from "./ButtonStyles";

type ButtonProps = React.ComponentProps<"button">;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`${buttonStyles} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
};
