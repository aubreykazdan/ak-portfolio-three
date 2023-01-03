import { getClient } from "../lib/sanity";
import { featuredPostQuery } from "@/lib/queries";

import BannerImageOverlap from "../components/layouts/banners/bannerImageOverlap";
import Layout from "../components/layouts/base/layout";
import SplitWithScreenshot from "../components/layouts/hero/splitWithScreenshot";
import SplitGridRight from "../components/layouts/split/splitGridRight";
import BlogMainPreview from "@/components/layouts/blog/blogMainPreview";

export default function Home({ data }) {
  const { blogPost } = data;
  return (
    <Layout page="Home">
      <main>
        <div className="pb-8 sm:pb-16 lg:pb-20">
          <SplitWithScreenshot />
        </div>
        <div className="py-8 sm:py-16 lg:py-20">
          <BlogMainPreview showHeading data={blogPost} />
        </div>
        <div className="mt-16 lg:mt-0 sm:py-8 py-16 lg:py-20">
          <SplitGridRight />
        </div>
        <div className="py-16 lg:py-20">
          <BannerImageOverlap />
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const blogPost = await getClient(preview).fetch(featuredPostQuery);
  return {
    props: {
      preview,
      data: {
        blogPost,
      },
    },
  };
}
