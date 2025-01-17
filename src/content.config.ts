import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      mainImage: image(),
      mainImageAlt: z.string(),
      keywords: z.array(z.string()),
    }),
});

const workExperience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './content/work-experience' }),
  schema: () => {
    z.object({
      index: z.number(),
      title: z.string(),
      company: z.string(),
      time: z.string(),
    });
  },
});

export const collections = { blog, workExperience };
