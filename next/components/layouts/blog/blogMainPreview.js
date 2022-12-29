import Container from "../container";
import { urlForImage } from "/lib/sanity";

export default function BlogMainPreview({ data }) {
  console.log(data);
  const { mainImage } = data;
  return (
    <>
      <div>
        <Container>
          <div className="pb-16 lg:pb-20 border-b border-black">
            <div className="relative sm:py-16 lg:py-0 mb-40 lg:mb-0">
              <div className="relative max-w-md sm:max-w-3xl">
                <div className="relative overflow-hidden py-64">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={urlForImage(mainImage.asset).url()}
                  />
                </div>
                <div className="p-6 w-full lg:w-2/3 absolute -bottom-20 right-0 lg:bottom-[20%] lg:-right-[45%] bg-white hover:bg-accent transition ease-in-out border border-black group hover:border-transparent">
                  <a href="#">
                    <div className="space-y-2">
                      <time className="">Date</time>
                      <p className="">Title</p>
                      <p>Description</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
