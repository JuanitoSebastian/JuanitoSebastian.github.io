import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export interface Frontmatter {
  title: string;
  description: string;
  author: string;
  date: string;
  tags: [string];
  draft?: boolean;
}

export interface Post {
  url: string;
  frontmatter: Frontmatter;
}

export type WorkExperience = {
  Content: AstroComponentFactory;
  frontmatter: {
    index: number;
    title: string;
    company: string;
    time: string;
  };
};
