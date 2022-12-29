export const settingsQuery = `
*[_type == "siteSettings"][0]{
  ...,
  ogImage {
  asset->
  }
}
`;

export const navQuery = `
*[_type == "navMenu"][0]{
  items[]{
    _key,
    link,
    title,
    "path": path->slug.current
  }
}
`;

export const socialsQuery = `
*[_type == "socials"][0]
`;

export const homeQuery = `
*[_type == "page" && title == "Home"][0]
`;

export const projectsPageQuery = `
*[_type == "page" && title == "Projects"][0]
`;

export const contactQuery = `
*[_type == "page" && title == "Contact"][0]
`;

export const aboutQuery = `
*[_type == "page" && title == "About"][0]
`;

export const blogPageQuery = `
*[_type == "page" && title == "Blog"][0]
`;

export const blogPostsQuery = `
*[_type == "post" && !(_id in path('drafts.**'))] | order(order asc){
  ...,
  categories[]->,
}
`;

export const postsPreviewQuery = `
*[_type == "post" && !(_id in path('drafts.**'))] | order(order asc)[0...3]{
  ...,
  categories[]->,
}
`;

export const blogSlugQuery = `
*[_type == "post" && slug.current == $slug][0]{
  ...,
  categories[]->,
}
`;

export const projectsQuery = `
*[_type == "project"] | order(order asc)
`;
