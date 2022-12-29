import BannerImageOverlap from "../components/layouts/banners/bannerImageOverlap";
import Layout from "../components/layouts/base/layout";
import SplitWithScreenshot from "../components/layouts/hero/splitWithScreenshot";
import SplitGridRight from "../components/layouts/split/splitGridRight";

export default function Home({}) {
  return (
    <Layout page="Home">
      <main>
        <SplitWithScreenshot />
        <div className="py-16 lg:py-20">
          <SplitGridRight />
        </div>
        <div className="py-16 lg:py-20">
          <BannerImageOverlap />
        </div>
      </main>
    </Layout>
  );
}
