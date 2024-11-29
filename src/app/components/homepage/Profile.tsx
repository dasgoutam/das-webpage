import Image from 'next/image';
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Profile() {
    return (
        <div className="text-gray-700 px-4 py-2 m-2">
            <div className="flex justify-start">
            <Image
                src="/images/picture.png"
                alt="profile_picture"
                width={180}
                height={180}
                className="rounded-full bg-blue-200"
            />
            <div className="flex flex-col ml-10 p-4">
                <div className='mb-8'>
                    <div className='text-3xl font-black mb-1'>Goutam Das</div>
                    <div>
                        <div className='text-sm font-thin ml-1'>Dortmund, Germany</div>
                        <div className='text-sm font-semibold ml-1 text-sky-600'>goutam2475@gmail.com</div>
                    </div>
                </div>
                <div className='flex flex-row space-x-4 ml-1'>
                    <div>
                        <Link href="https://github.com/dasgoutam" target="_blank">
                            <div className='flex flex-row space-x-2 items-center'>
                                <FaGithub size={24} />
                                <div className='text-sm font-semibold'>Github</div>
                            </div>
                        </Link>
                    </div>
                    <div>|</div>
                    <div>
                        <Link href="https://www.linkedin.com/in/das-goutam/" target="_blank">
                            <div className="flex flex-row space-x-2 items-center">
                                <FaLinkedin size={24} />
                                <div className='text-sm font-semibold'>LinkedIn</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}