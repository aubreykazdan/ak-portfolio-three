import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
    }
    return true;
  });
};

const postFields = `
  _id,
  body,
  bodyTwo,
  categories[]->,
  description,
  featured,
  imagesArray,
  mainImage,
  mainImageTwo,
  publishedAt,
  'slug': slug.current,
  title,
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post" && featured == true]{
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllPosts(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getPost(slug, preview) {
  const curClient = getClient(preview);
  const [post] = await Promise.all([
    curClient.fetch(
      `*[_type == "post" && slug.current == $slug] | order(publishedAt desc) {
          ${postFields}
        }
      `,
      { slug }
    ),
  ]);
  return { post };
}
