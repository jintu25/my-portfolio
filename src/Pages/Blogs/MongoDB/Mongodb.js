import React from 'react';

const Mongodb = () => {
    return (
        <div className='mx-12 my-6 '>
            <h2 className='text-white font-semibold text-3xl'>What is MongoDB ?</h2>
            <p className='text-slate-300 font-normal mt-3'><a href='https://www.mongodb.com/docs/drivers/node/current/usage-examples/' className='text-sky-400'>MongoDB</a>  is an open-source, document-oriented NoSQL database management system that provides a flexible data model for storing and managing unstructured and semi-structured data. It was developed by MongoDB, Inc. and was first released in 2009. Unlike traditional relational databases, MongoDB does not use tables to store data. Instead, data is stored in collections, which are similar to tables but do not require a fixed schema. Documents in a collection can have different fields and data types, allowing for more flexibility and faster data modeling. MongoDB uses a JSON-like document format called BSON (Binary JSON) to store data. BSON supports a wide range of data types, including strings, integers, floating-point numbers, arrays, and even embedded documents. MongoDB is well-suited for modern web and mobile applications, as well as for handling big data and other complex data management tasks.</p>
            <h2 className='text-white font-semibold text-3xl mt-6'>Learn About MongoDB</h2>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'>Flexible data model :</h4>
            <p className='text-slate-300 font-normal mt-2'> MongoDB's document-oriented data model allows for flexible and dynamic schemas, making it easier to store and manage unstructured and semi-structured data.</p>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'>Client side rendering :</h4>
            <p className='text-slate-300 font-normal mt-2'>Next.js also supports client-side rendering, allowing developers to build interactive user interfaces that run on the client-side. Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).
            </p>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'> Scalability :</h4>
            <p className='text-slate-300 font-normal mt-2'> MongoDB is designed to scale horizontally across multiple servers and can handle large volumes of data and traffic.</p>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'>Performance :</h4>
            <p className='text-slate-300 font-normal mt-2'>MongoDB is known for its high performance and can handle a large number of reads and writes per second, making it well-suited for real-time applications.</p>

            <h4 className='text-xl font-semibold mt-5 text-blue-500'>Availability :</h4>
            <p className='text-slate-300 font-normal mt-2'> MongoDB's built-in replication and automatic failover capabilities ensure high availability and data redundancy.</p>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'> Rich query language :</h4>
            <p className='text-slate-300 font-normal mt-2'> MongoDB supports a rich query language that allows for complex queries and aggregation operations on large datasets. 
            </p>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'>Indexing :</h4>
            <p className='text-slate-300 font-normal mt-2'> MongoDB provides a wide range of indexing options that can improve query performance and speed up data retrieval. 
            </p>
            <h4 className='text-xl font-semibold mt-5 text-blue-500'>Integration :</h4>
            <p className='text-slate-300 font-normal mt-2'>MongoDB integrates easily with popular programming languages and frameworks, making it a popular choice for modern web and mobile applications. 
            </p>
        </div>
    );
};

export default Mongodb;