import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    linkedinUrl: z.string().url(),
    linkedinEmbedSrc: z.string().url().optional(),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
