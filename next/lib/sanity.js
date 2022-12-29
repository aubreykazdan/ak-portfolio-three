import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./config";

export const urlForImage = (source) =>
  imageUrlBuilder(sanityConfig).image(source);
