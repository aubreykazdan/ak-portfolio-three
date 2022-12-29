export const allPostsQuery = `
*[_type == "post"]{
  ...,
  categories[]->
}
`;

export const postSlugQuery = `
*[_type == "post" && slug.current == $slug][0]{
  ...,
  categories[]->,
}
`;
