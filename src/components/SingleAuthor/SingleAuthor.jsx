import React from 'react';

const SingleAuthor = (props) => {
    const { id, author_name, author_image, blog_title, blog_cover_image, read_time, publish_Date } = props.author;
    const totalReadTime = props.totalReadTime;
    return (
        <>
            <div className="card w-full bg-base-100  shadow-xl lg:mt-8 ">
                <figure><img src={blog_cover_image} alt="Shoes" className='w-8/12 p-6' /></figure>
                <div className="card-body">
                    {/* Top side [Start ] */}
                    <div className='flex justify-between '>
                        {/* Author image,name,and pubnlih data [Start] */}
                        <div className='flex gap-7'>
                            <img src={author_image} alt="author_name" className='w-20 rounded-3xl' />
                            <div>
                                <p className='text-2xl font-bold'>{author_name}</p>
                                <p>{publish_Date}</p>
                            </div>
                        </div>
                        {/* Author image,name,and pubnlih data [End] */}

                        {/* Bookmark and Read minute show start */}
                        <div >
                            {read_time} min read
                            <button className='ml-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                            </svg>
                            </button>
                        </div>
                        {/* Bookmark and Read minute show end */}
                    </div>
                    {/* Top side [End ] */}
                    
                        {/* Blog Title Start  */}
                        <h1 className='text-3xl font-black'>{blog_title}</h1>
                        {/* Blog Title End  */}
                    <div className="card-actions mt-3">
                        <button className="btn btn-warning text-lg" onClick={()=>totalReadTime(read_time)}>Mark as read</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleAuthor;