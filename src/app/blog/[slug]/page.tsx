import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc' // Use /rsc for the App Router compatibility
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blogs');

export default async function BlogPost({ params }) {
    const {slug} = await params;
    const data = await getPostBySlug(slug);
    
    return (
        <MDXRemote
            source={data.content}
            />
    );
}