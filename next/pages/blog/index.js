import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";

import SimpleBanner from "../../components/layouts/banners/simpleBanner";
import Layout from "../../components/layouts/base/layout";
import { allPostsQuery } from "@/lib/queries";

export default function Blog({ data }) {
  const router = useRouter();
  console.log(data);
  return (
    <Layout page="Blog">
      <main>
        <SimpleBanner title="Blog" />
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
