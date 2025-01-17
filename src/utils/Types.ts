import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { ImageMetadata } from 'astro';

export interface Frontmatter {
  mainImage: ImageMetadata;
  mainImageAlt: string;
  title: string;
  description: string;
  date: Date;
  keywords: string[];
}

export interface BlogPost {
  data: Frontmatter;
  id: string;
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
