import BlogContent from "@/components/sanity/blogContent";
import Link from "next/link";
import Container from "../container";
import { urlForImage } from "/lib/sanity";

export default function BlogThreeColumns({ data }) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    <Container>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {data.map((post) => {
            const {
              mainImage,
              title,
              slug,
              publishedAt,
              categories,
              description,
            } = post;
            return (
              <Link href={`blog/${slug}`} key={title}>
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:bg-gray-100 transition ease-in-out min-h-full">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={urlForImage(mainImage.asset).url()}
                      alt={mainImage.imageAlt}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex-1">
                      <time className="text-sm">
                        {new Date(publishedAt).toLocaleDateString(
                          "en-us",
                          options
                        )}
                      </time>
                      <div className="category my-2">
                        {categories.map((item) => {
                          return (
                            <span className="text-sm" key={item._id}>
                              {item.title}
                            </span>
                          );
                        })}
                      </div>
                      <div className="mt-2 block">
                        <p className="text-xl font-semibold">{title}</p>
                        <div className="mt-3">
                          <BlogContent content={description} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
