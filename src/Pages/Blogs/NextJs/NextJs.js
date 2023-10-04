import React from 'react';

const NextJs = () => {
    return (
        <div className='mx-12 my-6 '>
            <h2 className='text-white font-semibold text-3xl'>What is NextJs ?</h2>
            <p className='text-slate-300 font-normal mt-3'><a href='https://nextjs.org/docs' className='text-sky-400'>nextJs</a>  is a popular open-source React framework that allows developers to build scalable, high-performance web applications with ease. It has gained widespread popularity due to its ability to simplify server-side rendering, static site generation, and client-side rendering. In this blog, we will explore the key features and benefits of Next.js.</p>
            <h2 className='text-white font-semibold text-3xl mt-6'>Learn About NextJs</h2>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'>Server side rendering :</h4>
            <p className='text-slate-300 font-normal mt-2'> Next.js simplifies server-side rendering, making it easier to build high-performance web applications. Server-side rendering involves rendering the HTML content of a website on the server before sending it to the browser. This approach can significantly improve website loading times and search engine optimization (SEO), resulting in better user experience and increased website traffic.</p>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'>Client side rendering :</h4>
            <p className='text-slate-300 font-normal mt-2'>Next.js also supports client-side rendering, allowing developers to build interactive user interfaces that run on the client-side. Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).
            </p>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'> Static side generation :</h4>
            <p className='text-slate-300 font-normal mt-2'>  Next.js also supports static site generation, which involves pre-rendering the website pages at build time. This approach is ideal for websites with a lot of static content that rarely changes. With static site generation, the website can be hosted on a content delivery network (CDN) to improve website performance and availability.</p>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'>Automatic code splitting :</h4>
            <p className='text-slate-300 font-normal mt-2'>Next.js automatically splits the code into smaller chunks to optimize website loading times. This feature is particularly useful for websites with a lot of JavaScript code as it ensures that only the necessary code is loaded when needed.</p>

            <h4 className='text-xl font-semibold mt-5 text-blue-500'>Typescript supported :</h4>
            <p className='text-slate-300 font-normal mt-2'>Next.js has built-in support for TypeScript, a popular programming language that adds static typing to JavaScript.</p>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'> Easy Deployment :</h4>
            <p className='text-slate-300 font-normal mt-2'>Next.js applications can be easily deployed on platforms like Vercel, Netlify, firebase, and AWS Amplify. These platforms offer easy deployment, scalability, and hosting for Next.js applications. 
            </p>
        </div>
    );
};

export default NextJs;