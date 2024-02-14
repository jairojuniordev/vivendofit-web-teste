import * as prismic from "@prismicio/client";

export const client = prismic.createClient(
  import.meta.env.VITE_PRISMIC_REPOSITORY,
  {
    accessToken: import.meta.env.VITE_PRISMIC_ACCESS_TOKEN,
  }
);
