import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getClient } from "@/lib/sanity.server";
import { postSlugQuery } from "@/lib/queries";
import Layout from "@/components/layouts/base/layout";
import BlogContentCentered from "@/components/layouts/blog/blogContentCentered";

export default function BlogSlug({ data = {}, preview }) {
  const router = useRouter();
  const slug = data?.post?.slug;

  if (!router.isFallBack && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { post } = data;
  const { title } = post;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout page={`Blog | ${title}`}>
      <main>
        <BlogContentCentered data={post} />
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
