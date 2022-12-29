export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production-two",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "cuykwxk9",
  apiVersion: "v1",
  token:
    process.env.SANITY_API_TOKEN ||
    "skz4MtlOpZoShgxGfZpdA4RHzscdii7JFvztbGV9pBH7ibjMqpljDFJyF8MPjecJdtxEA5pxQnQYQcbXrmkkDftMPyTuEMuBPdQCmWqcDrGfLjP4FZxUXwFjutXftdGi87PkFBH36rH68XRLRwONQiyxco4hPwLxiBRjSvmVkOUpNT4FOxNa",
};
