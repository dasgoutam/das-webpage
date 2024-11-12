import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'src/content/blogs');

export async function getPostBySlug(slug) {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data, content } = matter(fileContents);

    return { 
        frontmatter: data, 
        content: content 
    };
}

export function getAllPostSlugs() {
  return fs
    .readdirSync(contentDirectory)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}
