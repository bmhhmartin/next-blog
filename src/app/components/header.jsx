
import Link from 'next/link';
import React from 'react';
import getAllMenu from '../libs/getAllMenu';

const header = async() => {

    const menus = await getAllMenu();


    return (
        <div>
            <nav class="flex items-center justify-between space-x-4 bg-red-600 py-3 px-10">
                <div>
                    <h3 className='text-white font-bold text-2xl'>
                        <Link href="/">ব্লগ সাইট</Link>
                    </h3>
                </div>
                <div className='flex gap-4'>
                    <Link href="/" class="font-medium px-3 py-2 rounded-lg text-white bg-red-900 hover:bg-green-700 hover:text-white">হোম</Link>
                    <Link href="/about" class="font-medium px-3 py-2 rounded-lg text-white bg-red-900 hover:bg-green-700 hover:text-white">আমাদের সম্পর্কে</Link>
                    {
                        menus.map((menu, index)=>(
                            <Link href={`post-list/${menu.id}`} class="font-medium px-3 py-2 rounded-lg text-white bg-red-900 hover:bg-green-700 hover:text-white" key={index}>{menu.name}</Link>
                        ))
                    }
                    <Link href="/contact" class="font-medium px-3 py-2 rounded-lg text-white bg-red-900 hover:bg-green-700 hover:text-white">যোগাযোগ</Link>
                </div>
            </nav>
        </div>
    );
};

export default header;