import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
