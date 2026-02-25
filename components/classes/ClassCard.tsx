import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
  location: string;
  id: string;
};

export const ClassCard = ({
  slug,
  title,
  description,
  location,
  id,
}: Props) => {
  return (
    <div className="border rounded-lg p-6 space-y-3 bg-light">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <p>{description}</p>

      <Link href={`/classes/${slug}`} className="inline-block underline">
        View class →
      </Link>
    </div>
  );
};
