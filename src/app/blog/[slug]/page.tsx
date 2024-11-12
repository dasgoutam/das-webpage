//import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc' // Use /rsc for the App Router compatibility
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blogs');

export default async function BlogPost({ params }) {
    const {slug} = await params;
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
  
    // Parse frontmatter and content using gray-matter
    const { data, content } = matter(fileContents);
    console.log("data", content);
    // Serialize the MDX content to make it usable in the component
    const mdxSource = await serialize(fileContents, { parseFrontmatter: true });
    //console.log(mdxSource);
    return (
        <MDXRemote
            source={content}
            />
    );
}