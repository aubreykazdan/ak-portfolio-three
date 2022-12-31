import BlogContent from "@/components/sanity/blogContent";
import Container from "../container";
import { urlForImage } from "/lib/sanity";

export default function BlogContentCentered({ data }) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const {
    mainImage,
    mainImageTwo,
    title,
    publishedAt,
    categories,
    description,
    body,
    bodyTwo,
  } = data;
  return (
    <div className="relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-prose text-lg">
          <figure>
            <img
              className="w-full rounded-lg"
              src={urlForImage(mainImage.asset).url()}
              alt={mainImage.imageAlt}
              width={1310}
              height={873}
            />
            <figcaption className="mt-2 text-gray-500 italic">
              {mainImage.caption}
            </figcaption>
          </figure>
          <div className="flex justify-center space-x-4 mt-8">
            <div className="category">
              {categories.map((item) => {
                return (
                  <span className="text-sm" key={item._id}>
                    {item.title}
                  </span>
                );
              })}
            </div>
          </div>
          <h1>
            <span className="block text-center text-3xl font-bold leading-8 tracking-tight  sm:text-4xl mt-4">
              {title}
            </span>
          </h1>
          <div className="flex justify-center">
            <time dateTime={publishedAt}>
              Published{" "}
              {new Date(publishedAt).toLocaleDateString("en-us", options)}
            </time>
          </div>
          <div className="mt-8 border-b border-black pb-6">
            <BlogContent content={description} />
          </div>
        </div>
        <div className="prose prose-lg mx-auto mt-6">
          <BlogContent content={body} />
          {mainImageTwo && (
            <figure>
              <img
                className="w-full rounded-lg"
                src={urlForImage(mainImageTwo.asset).url()}
                alt={mainImageTwo.imageAlt}
                width={1310}
                height={873}
              />
              <figcaption className="mt-2 text-gray-500 italic">
                {mainImageTwo.caption}
              </figcaption>
            </figure>
          )}
          {bodyTwo && <BlogContent content={bodyTwo} />}
        </div>
      </Container>
    </div>
  );
}
