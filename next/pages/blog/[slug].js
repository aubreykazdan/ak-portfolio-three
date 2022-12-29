import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { lazy } from "react";
import { PreviewSuspense } from "next-sanity/preview";
import {
  DocumentsCount,
  query,
} from "../../components/sanity/previewDocumentsCount";
import { getClient } from "@/lib/sanity.server";
import { postSlugQuery } from "@/lib/queries";

export default function BlogSlug({ data = {}, preview }) {
  const router = useRouter();
  const slug = data?.post?.slug;

  if (!router.isFallBack && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return router.isFallback ? (
    <p>Loading...</p>
  ) : (
    <>
      <div>hello</div>
    </>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postSlugQuery, {
    slug: params.slug,
  });
  return {
    props: {
      preview,
      data: {
        post,
      },
    },
  };
}
