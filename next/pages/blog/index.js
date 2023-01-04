import { getAllPosts } from "../../lib/api";
import { useRouter } from "next/router";

import SimpleBanner from "../../components/layouts/banners/simpleBanner";
import Layout from "../../components/layouts/base/layout";
import BlogThreeColumns from "@/components/layouts/blog/blogThreeColumns";
import BlogMainPreview from "@/components/layouts/blog/blogMainPreview";

export default function Blog({ allPosts, preview }) {
  const router = useRouter();

  const featuredBlogPost = allPosts.filter((item) => item.featured === true);
  const allBlogPosts = allPosts.filter((item) => item.featured === false);

  return (
    <Layout page="Blog">
      <main>
        <SimpleBanner title="Blog" />
        <div className="py-8 sm:py-16 lg:py-20">
          <BlogMainPreview data={featuredBlogPost[0]} />
        </div>
        <div className="mt-24 lg:mt-0">
          <BlogThreeColumns data={allBlogPosts} />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
