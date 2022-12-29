export const allPostsQuery = `
*[_type == "post"]{
  ...,
  categories[]->
}
`;
