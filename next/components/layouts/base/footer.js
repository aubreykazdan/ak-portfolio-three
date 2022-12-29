import Container from "../container";

export default function Footer({}) {
  return (
    <div className="border-t mt-8 md:mt-16 lg:mt-20">
      <Container>
        <div className="flex items-center justify-end mb-4 py-4">
          <p className="pt-4">© {new Date().getFullYear()} Aubrey Kazdan</p>
        </div>
      </Container>
    </div>
  );
}
