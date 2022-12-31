import Link from "next/link";
import Container from "../container";

export default function SplitGridRight() {
  return (
    <Container>
      <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div>
          <h2 className="">Highlighted Programming Languages</h2>
          <p className="mt-3 max-w-3xl text-lg">
            Listed here are some of the programming languages I am fluent in.
            Next on the list: Remix.
          </p>
          <div className="mt-8 sm:flex space-x-4">
            <a
              href="https://github.com/aubreykazdan"
              target="_blank"
              rel="noreferrer"
              className="btn btn-lg"
            >
              GitHub
            </a>
            <Link href="/projects" className="btn btn-lg mt-3 sm:mt-0 sm:ml-3">
              Projects
            </Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col items-center bg-gray-50 py-8 px-8">
            <img
              className="max-h-12"
              src="/svg/tailwindcss.svg"
              alt="Tailwind CSS Logo"
            />
            <p className="mt-2">Tailwind CSS</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gray-50 py-8 px-8">
            <img className="max-h-12" src="/svg/css3.svg" alt="CSS3 Logo" />
            <p className="mt-2">CSS3</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gray-50 py-8 px-8">
            <img
              className="max-h-12"
              src="/svg/typescript.svg"
              alt="Typescript Logo"
            />
            <p className="mt-2">TypeScript</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gray-50 py-8 px-8">
            <img
              className="max-h-12"
              src="/svg/javascript.svg"
              alt="JavaScript Logo"
            />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gray-50 py-8 px-8">
            <img className="max-h-12" src="/svg/react.svg" alt="React Logo" />
            <p className="mt-2">React</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gray-50 py-8 px-8">
            <img
              className="max-h-12"
              src="/svg/nextdotjs.svg"
              alt="Next JS Logo"
            />
            <p className="mt-2">Next JS</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
