import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='font-bold text-5xl text-red-700 py-[50px]'>Contact Page</h1>
            <form action="">
                <label className="relative block mb-3">
                    <span className="sr-only">Name</span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Name..." type="text" name="search"/>
                </label>
                <label className="relative block mb-3">
                    <span className="sr-only">Email</span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email...." type="email" name="search"/>
                </label>
                <label className="relative block mb-3">
                    <span className="sr-only">Website</span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Website...." type="text" name="search"/>
                </label>
                <label className="relative block mb-3">
                    <span className="sr-only">Website</span>
                    <textarea rows={5} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Message..." type="text" name="search"/>
                </label>
                <button className='py-3 px-6 bg-green-600 text-white font-bold' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default page;