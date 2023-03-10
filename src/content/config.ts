import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    banner: z.string(),
    bannerAlt: z.string(),
    categories: z.array(z.string()),
    meta: z
      .object({
        keywords: z.array(z.string()),
      })
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
