import Container from "../container";

export default function Footer({}) {
  return (
    <div className="border-t mt-8 md:mt-16 lg:mt-20">
      <Container>
        <div className="flex items-center justify-between mb-4 py-4">
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/aubreykazdan/"
              target="_blank"
              rel="noreferrer"
              className="logo"
            >
              <img
                className="w-auto h-6"
                src="/svg/instagram.svg"
                alt="Instagram Logo"
              />
            </a>
            <a
              href="https://github.com/aubreykazdan"
              target="_blank"
              rel="noreferrer"
              className="logo"
            >
              <img
                className="w-auto h-6"
                src="/svg/github.svg"
                alt="GitHub Logo"
              />
            </a>
          </div>
          <div>
            <p className="pt-4">© {new Date().getFullYear()} Aubrey Kazdan</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
