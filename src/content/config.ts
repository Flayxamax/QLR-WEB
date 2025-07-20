import { defineCollection, z } from "astro:content";

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    subtitle: z.string(),
    description: z.string(),
    image: z.string(),
    size: z.array(z.string()),
    features: z.array(z.string()),
  }),
});

export const collections = { products };
