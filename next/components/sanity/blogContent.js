import SanityBlockContent from "@sanity/block-content-to-react";
import markdownStyles from "../../styles/markdown-styles.module.css";

export default function BlogContent({ content }) {
  return (
    <SanityBlockContent
      blocks={content}
      className={markdownStyles.markdownStyles}
    />
  );
}
