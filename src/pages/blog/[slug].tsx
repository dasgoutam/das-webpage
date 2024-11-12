import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote' // Use /rsc for the App Router compatibility

interface Frontmatter {
    title: string;
  }

interface Props {
    content: MDXRemoteSerializeResult<Record<string, unknown>, Frontmatter>
}

export default function BlogPost({content}: Props) {
    //const {slug} = await params;
    //const data = await getPostBySlug(slug);
    
    return (
        <div>
            <div>{content.frontmatter.title}</div>
            <MDXRemote {...content}/>
        </div>
        
    );
}

export async function getStaticPaths() {
    const slugs = getAllPostSlugs();
    const paths = slugs.map((slug) => ({ params: { slug } }));
  
    return {
      paths,
      fallback: false, // Set to 'blocking' or 'true' for SSR/fallbacks if needed
    };
  }
  
  // This function fetches the data needed to render a page with a given slug
  export async function getStaticProps({params,}: {params: Promise<{ slug: string }>}) {
      const {slug} = await params;
      const mdxSource = await getPostBySlug(slug);
      return {
        props: {
            content: mdxSource,
        },
      };
    }