import { buttonStyles } from "./ButtonStyles";

type ButtonLinkProps = React.ComponentProps<"a"> & {
  href: string;
};

export const ButtonLink = ({
  children,
  className,
  href,
  ...props
}: ButtonLinkProps) => {
  return (
    <a href={href} className={`${buttonStyles} ${className ?? ""}`} {...props}>
      {children}
    </a>
  );
};
