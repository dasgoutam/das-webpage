import Image from 'next/image';
import Link from 'next/link';

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
            <div className="flex mx-10 p-4">
                <div>
                    <div className='text-3xl font-black'>Goutam Das</div>
                    <div className=''>
                        <div className='text-sm font-thin px-1'>Dortmund, Germany</div>
                        <div className='text-sm font-thin px-1'>goutam2475@gmail.com</div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
}