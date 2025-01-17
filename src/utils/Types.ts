import type { RenderedContent } from 'astro:content';
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
  id: string;
  body?: string;
  collection: 'workExperience';
  data: {
    index: number;
    time: string;
    title: string;
    company: string;
  };
  rendered?: RenderedContent;
  filePath?: string;
};
