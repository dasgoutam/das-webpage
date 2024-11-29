import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
        <div className="container mx-auto px-60 py-5 flex justify-between items-center">

            <div className='flex justify-start'>
                <div>
                    <Image src="/images/signature.png" alt="Goutam Das" width={120} height={30} className="rounded-full" />
                </div>            
            </div>  

  
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-semibold">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">CV</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Blog</a>
          </nav>
        </div>
      </header>
    );
}