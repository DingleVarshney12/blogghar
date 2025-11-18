import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import ListBlogCard from '@/components/ui/ListBlogCard';
import RecommendLatestBlog from '@/components/ui/Recommend&LatestBlog';
import { getData } from '@/hooks/getData';
import Image from 'next/image';
import React from 'react'

const Blog = async ({ params }) => {
    const { id } = await params;

    // Fetch data on the server
    const data = await getData();
    const blog = data.find((b) => b.id === Number(id));
    console.log(blog)
    return (
        <>
            <Container className='mt-28'>
                <div className='text-sm text-blue-500 mb-4'>Blog / {id}</div>
                <div>
                    <h1 className='text-3xl font-bold mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae numquam assumenda cupiditate alias? Numquam consequatur minus debitis ex odit?</h1>
                    <div className='author-data my-8'>
                        <Image alt='author image' src={"/download.jpg"} width={40} height={40} className='w-10 h-10 rounded-full object-cover inline-block mr-2' />
                        <span className='align-middle font-medium mr-2 border-r border-gray-100 pr-4'>John Doe</span>
                        <span className="text-sm font-medium align-middle">Webnesday , 12-11-2006</span>
                    </div>
                    <Image alt='blog image' src={"/download.jpg"} width={1920} height={1080} className='w-11/12 mx-auto aspect-video h-auto object-cover rounded-lg' />
                    <div className="md:grid md:grid-cols-[1fr_auto] gap-2 relative" >
                        <div>

                            <div className="blog_content my-4" >
                                <ProductDescription desc={blog.body} />

                            </div>
                            <div className='comments mb-6'>
                                <h2 className='text-2xl font-bold mb-4'>Comments</h2>
                                <div className='mb-4'>
                                    <div className='flex items-start mb-4'>
                                        <Image alt='commenter image' src={"/download.jpg"} width={40} height={40} className='w-10 h-10 rounded-full object-cover inline-block mr-2' />
                                        <div>
                                            <span className='font-medium'>Jane Smith</span>
                                            <p className='text-sm '>Great post! Really enjoyed reading it.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='m-4'>
                        <RecommendLatestBlog/>

                        </div>
                    </div>
                </div>



            </Container>
        </>
    )
}

export default Blog
const ProductDescription = ({ desc }) => {
    return (
        <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: desc }}
        ></div>
    );
};