import Container from "../container";

export default function simpleBanner({ title }) {
  return (
    <div className="py-8 sm:py-16 shadow">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>
      </Container>
    </div>
  );
}
