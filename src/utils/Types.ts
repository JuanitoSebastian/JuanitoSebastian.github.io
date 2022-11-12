export interface Frontmatter {
    title: string;
    description: string;
    author: string;
    date: string;
    tags: [string];
}

export interface Post {
    url: string;
    frontmatter: Frontmatter;
}
