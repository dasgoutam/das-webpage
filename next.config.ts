import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withMDX = createMDX({
})

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
};


export default withMDX(nextConfig);
