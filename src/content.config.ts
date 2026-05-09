import { glob, file } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const workExperience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './content/work-experience' }),
  schema: () =>
    z.object({
      index: z.number(),
      title: z.string(),
      company: z.string(),
      time: z.string(),
    }),
});

const principles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './content/principles' }),
  schema: () =>
    z.object({
      title: z.string(),
      index: z.number(),
    }),
});

const skills = defineCollection({
  loader: file('./content/skills.json'),
  schema: () =>
    z.object({
      id: z.string(),
      skillListTitle: z.string(),
      skills: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          iconUrl: z.string(),
        })
      ),
    }),
});

const socials = defineCollection({
  loader: file('./content/socials.json'),
  schema: () =>
    z.object({
      label: z.string(),
      url: z.string(),
      icon: z.string(),
    }),
});

const aboutMe = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './content/aboutMe' }),
  schema: () => z.object({}),
});

export const collections = {
  workExperience,
  principles,
  skills,
  socials,
  aboutMe,
};
