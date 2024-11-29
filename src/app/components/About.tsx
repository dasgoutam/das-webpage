import AboutContent from '@/content/homepage/about.mdx';

export default function About() {
    return (
        <div className="text-gray-700 px-8 py-10 m-2">
          {/* <div className="text-4xl font-black">About</div> */}
          <div>
            <div className="prose max-w-none text-justify pt-10">
              <AboutContent />
            </div>
          </div>
        </div>
    );
}