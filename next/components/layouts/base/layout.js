import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Aubrey Kazdan's personal portfolio"
          key="ogdesc"
        />
        <meta property="og:title" content={page} key="ogtitle" />
        <meta property="og:image" content="/images/portait.jpg" key="ogimage" />
        <title>Aubrey Kazdan | {page}</title>
      </Head>
      <div className="min-h-screen">
        <Header />
        <main className="flex-1 mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
