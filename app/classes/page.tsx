import Section from "@/components/layout/Section";
import { ClassCard } from "@/components/classes/ClassCard";
import { classes } from "@/data/classes";

type Props = {
  slug: string;
  title: string;
  description: string;
  location: string;
  id: string;
};
export default function ClassDetailPage({
  slug,
  title,
  description,
  location,
  id,
}: Props) {
  return (
    <Section>
      {classes.map((c) => (
        <ClassCard
          id={c.id}
          key={c.id}
          location={c.location}
          slug={c.slug}
          title={c.title}
          description={c.description}
        />
      ))}
    </Section>
  );
}
