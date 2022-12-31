/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
