import { useRouter } from "next/router";
import { getAllPostsWithSlug, getPost } from "../../lib/api";
import ErrorPage from "next/error";
import Layout from "@/components/layouts/base/layout";
import BlogContentCentered from "@/components/layouts/blog/blogContentCentered";
import GridThreeColumnLargeImages from "@/components/layouts/grids/gridThreeColumnLargeImages";

export default function BlogSlug({ post, preview }) {
  const router = useRouter();

  if (!router.isFallBack && !post) {
    return <ErrorPage statusCode={404} />;
  }

  const blogPost = post[0];
  const { title, imagesArray } = blogPost;

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <Layout page={`Blog | ${title}`}>
      <main>
        <div className="py-8 sm:py-16 lg:py-20">
          <BlogContentCentered data={blogPost} />
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
  const data = await getPost(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
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
