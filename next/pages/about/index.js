import SplitImageRight from "@/components/layouts/split/splitImageRight";
import SimpleBanner from "../../components/layouts/banners/simpleBanner";
import Layout from "../../components/layouts/base/layout";

export default function About({}) {
  return (
    <Layout page="About">
      <main>
        <SimpleBanner title="About" />
        <div className="py-8 sm:py-16 lg:py-24">
          <SplitImageRight />
        </div>
      </main>
    </Layout>
  );
}
