import Link from "next/link";

export default function BannerImageOverlap({}) {
  return (
    <div className=" bg-gray-100 pb-16 lg:relative lg:z-10 lg:pb-0">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 px-4 sm:px-6 lg:px-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
            <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <img
                className="object-cover lg:h-full lg:w-full"
                src="/images/portrait-two.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            <blockquote>
              <div>
                <p className="mt-12 text-2xl font-medium">
                  Documenting some of my hobbies & passions is how I keep my
                  creative spirit alive. Check them out with the links below.
                  <span className="block text-accent font-semibold">
                    Get to know me a little bit.
                  </span>
                </p>
              </div>
              <div className="sm:flex space-x-4 mt-8">
                <a
                  href="https://www.instagram.com/aubreykazdan/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lg"
                >
                  Instagram
                </a>
                <Link href="/about" className="btn btn-lg">
                  About
                </Link>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
