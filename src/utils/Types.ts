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
