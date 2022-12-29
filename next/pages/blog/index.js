import SimpleBanner from "../../components/layouts/banners/simpleBanner";
import Layout from "../../components/layouts/base/layout";

export default function Blog({}) {
  return (
    <Layout page="Blog">
      <main>
        <SimpleBanner title="Blog" />
      </main>
    </Layout>
  );
}
