import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
        <div className="container mx-auto px-48 py-5 flex justify-between items-center">

            <div className='flex justify-start'>
                <div>
                    <Image src="/images/signature.png" alt="Goutam Das" width={140} height={30} className="rounded-full" />
                </div>            
            </div>  

  
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-semibold">About</Link>
            <Link href="/cv" className="text-gray-600 hover:text-blue-600">CV</Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-600">Projects</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">Blog</Link>
          </nav>
        </div>
      </header>
    );
}