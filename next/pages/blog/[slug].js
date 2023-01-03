import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import Layout from "@/components/layouts/base/layout";
import BlogContentCentered from "@/components/layouts/blog/blogContentCentered";
import GridThreeColumnLargeImages from "@/components/layouts/grids/gridThreeColumnLargeImages";

export default function BlogSlug({ data = {}, preview }) {
  const router = useRouter();

  if (!router.isFallBack && !post?.slug) {
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

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}
export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
