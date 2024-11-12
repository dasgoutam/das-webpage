import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'src/content/blogs');

export async function getPostBySlug(slug) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter and content using gray-matter
  const { data, content } = matter(fileContents);

  // Serialize content for next-mdx-remote
  const mdxSource = await serialize(content, {parseFrontmatter: true});

  return { props: { mdxSource } };
}

export function getAllPostSlugs() {
  return fs
    .readdirSync(contentDirectory)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}
