import BlogContent from "@/components/sanity/blogContent";
import Link from "next/link";
import Container from "../container";
import { urlForImage } from "/lib/sanity";

export default function BlogMainPreview({ data, showHeading }) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const { mainImage, title, slug, publishedAt, categories, description } = data;
  return (
    <div>
      <Container>
        <div className="relative">
          {showHeading === true ? (
            <div className="mb-8">
              <h2>Featured Blog Post</h2>
              <Link href="/blog" className="btn btn-lg mt-4">
                View All Posts
              </Link>
            </div>
          ) : null}
          <div className="relative max-w-md sm:max-w-3xl">
            <div className="relative overflow-hidden py-64 rounded-lg">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={urlForImage(mainImage.asset).url()}
                alt={mainImage.imageAlt}
              />
            </div>
            <Link href={`blog/${slug}`}>
              <div className="p-6 w-full lg:w-2/3 absolute -bottom-20 right-0 lg:bottom-[20%] lg:-right-[45%] bg-white hover:bg-gray-100 transition ease-in-out shadow-lg  group rounded-b-lg lg:rounded-lg">
                <div className="space-y-2">
                  <time className=" text-sm">
                    {new Date(publishedAt).toLocaleDateString("en-us", options)}
                  </time>
                  <div className="category">
                    {categories.map((item) => {
                      return (
                        <span className="text-sm" key={item._id}>
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
      </Container>
    </div>
  );
}
