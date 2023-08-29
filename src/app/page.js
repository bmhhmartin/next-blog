import React from 'react';
import Image  from 'next/image';
import Link from 'next/link';
import getNewestPost from './libs/getNewestPost';


const page = async () => {

  const data =  await getNewestPost();


  return (
    <div>
        <h1 className='font-bold text-5xl text-red-700 py-[50px]'>সর্বশেষ সংবাদ</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {
            data.map((post, index)=>(
              <Link href={`/blog/${post.id}`} key={index}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image src={post.img} height={300} width={500} layout="fixed" placeholder='blur' blurDataURL='https://www.befunky.com/images/prismic/391d50e3-1268-45e1-aaaa-3cfe6f2fb90d_hero-blur-image-2.jpg?auto=avif,webp&format=jpg&width=896' alt="news"/>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                    <p className="text-gray-700 text-base">
                      {post.short}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Last Update: {post.updated_at.slice(0, 10)}
                    </span>
                  </div>
              </div>
              </Link>
            ))
          }
        </div>
        
        
    </div>
  );
};

export default page;