import React from 'react';
import getPostDetails from '../../libs/getPostDetails';
import Image from 'next/image';

const page = async ({params}) => {


    const id = params.id;
    const data = await getPostDetails(id);


    return (
        <div>
            <figure className='mt-5'>
                {
                    <Image  height={300} width={500} layout="responsive" src={data.postDetails.img} alt={data.postDetails.title} placeholder='blur' blurDataURL='https://www.befunky.com/images/prismic/391d50e3-1268-45e1-aaaa-3cfe6f2fb90d_hero-blur-image-2.jpg?auto=avif,webp&format=jpg&width=896'/>
                }
            </figure>

            <h2 className='font-bold text-4xl text-black-700 py-5'>{data.postDetails.title}</h2>
            <p className='text-xl text-justify'>{data.postDetails.content}</p>

        </div>
    );
};

export default page;