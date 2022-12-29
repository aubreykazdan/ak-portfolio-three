import BlogContent from "@/components/sanity/blogContent";
import Link from "next/link";
import Container from "../container";
import { urlForImage } from "/lib/sanity";

export default function BlogMainPreview({ data }) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const { mainImage, title, slug, publishedAt, categories, description } = data;
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
                    alt={mainImage.imageAlt}
                  />
                </div>
                <Link href={`blog/${slug.current}`}>
                  <div className="p-6 w-full lg:w-2/3 absolute -bottom-20 right-0 lg:bottom-[20%] lg:-right-[45%] bg-white hover:bg-accent hover:text-white transition ease-in-out border border-black hover:border-white group hover:border-transparent">
                    <div className="space-y-2">
                      <time className=" text-sm">
                        {new Date(publishedAt).toLocaleDateString(
                          "en-us",
                          options
                        )}
                      </time>
                      <div className="category">
                        {categories.map((item) => {
                          return (
                            <span className="text-sm ml-1" key={item._id}>
                              {item.title}
                            </span>
                          );
                        })}
                      </div>
                      <h3 className="text-xl">{title}</h3>
                      <BlogContent content={description} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
