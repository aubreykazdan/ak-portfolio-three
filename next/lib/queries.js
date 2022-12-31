export const allPostsQuery = `
*[_type == "post"]{
  ...,
  categories[]->
}
`;

export const featuredPostQuery = `
*[_type == "post" && featured == true][0]{
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
