import Container from "./Container";

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Biodanza with Caroline
        </div>
      </Container>
    </footer>
  );
}
