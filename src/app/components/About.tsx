'use client';

import AboutText from '@/content/homepage/about_text.mdx';

export default function About() {
    return (
        <div className="text-gray-700 px-8 py-10 m-2">
          <div className="text-4xl font-black">About</div>
          <div>
            <div className="prose max-w-none text-justify py-10">
              <AboutText />
            </div>
          </div>
        </div>
    );
}