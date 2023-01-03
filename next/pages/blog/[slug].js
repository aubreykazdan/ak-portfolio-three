import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getClient } from "@/lib/sanity.server";
import { postSlugQuery } from "@/lib/queries";
import { usePreviewSubscription } from "../../lib/sanity";
import Layout from "@/components/layouts/base/layout";
import BlogContentCentered from "@/components/layouts/blog/blogContentCentered";
import GridThreeColumnLargeImages from "@/components/layouts/grids/gridThreeColumnLargeImages";

export default function BlogSlug({ data = {}, preview }) {
  const router = useRouter();
  const slug = data?.post?.slug;
  const { postSlug } = usePreviewSubscription(postSlugQuery, {
    params: { slug },
    initialData: data,
    enables: preview && slug,
  });

  if (!router.isFallBack && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { post } = data;
  const { title, imagesArray } = post;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout page={`Blog | ${title}`}>
      <main>
        <div className="py-8 sm:py-16 lg:py-20">
          <BlogContentCentered data={post} />
        </div>
        {imagesArray && (
          <div>
            <GridThreeColumnLargeImages data={imagesArray} />
          </div>
        )}
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postSlugQuery, {
    slug: params.slug,
  });
  return {
    props: {
      preview,
      data: {
        post,
      },
    },
  };
}
