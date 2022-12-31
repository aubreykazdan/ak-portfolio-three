import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import SimpleBanner from "../../components/layouts/banners/simpleBanner";
import Layout from "../../components/layouts/base/layout";
import { allPostsQuery } from "@/lib/queries";
import BlogThreeColumns from "@/components/layouts/blog/blogThreeColumns";
import BlogMainPreview from "@/components/layouts/blog/blogMainPreview";

export default function Blog({ data }) {
  const router = useRouter();
  const { blogPosts } = data;

  const featuredBlogPost = blogPosts.filter((item) => item.featured === true);
  const allBlogPosts = blogPosts.filter((item) => item.featured === false);

  return (
    <Layout page="Blog">
      <main>
        <SimpleBanner title="Blog" />
        <div className="py-8 sm:py-16 lg:py-20">
          <BlogMainPreview data={featuredBlogPost[0]} />
        </div>
        <div className="">
          <BlogThreeColumns data={allBlogPosts} />
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const blogPosts = await getClient(preview).fetch(allPostsQuery);
  return {
    props: {
      preview,
      data: {
        blogPosts,
      },
    },
  };
}
