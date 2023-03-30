import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className=" navbar bg-base-100">
                <div className="flex-1">
                    <a className="font-black text-xl lg:text-4xl">Knowledge Cafe</a>
                </div>
                <div className="flex   gap-2">
                        <ul className='flex  lg:flex-row text-sm lg:text-xl gap-2 lg:gap-8 mr-3 lg:mr-14'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>    
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            </div>
                        </label>                
                </div>
            </div>
            <hr className='border ' />
        </div>
    );
};

export default Header;