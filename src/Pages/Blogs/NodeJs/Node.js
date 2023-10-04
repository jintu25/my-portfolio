import React from 'react';

const Node = () => {
    return (
        <div className="mx-12 my-6 ">
      <h2 className="text-white font-semibold text-3xl">What is React ?</h2>
      <p className="text-slate-300 font-normal mt-3">
        <a href="https://nodejs.org/en/docs" className="text-sky-400">
        Node.js
        </a>{" "}
         is an open-source server-side runtime environment that allows developers to build scalable and high-performance applications using JavaScript. Node.js uses the V8 JavaScript engine from Google Chrome, which compiles JavaScript code into native machine code, making it faster and more efficient than other server-side environments.Node.js allows developers to use JavaScript on both the client and server sides of a web application, which makes it easier to build and maintain applications. It provides a number of built-in modules, such as HTTP, File System, and Crypto, which can be used to develop a variety of applications.
      </p>
      <h2 className="text-white font-semibold text-3xl mt-6">
        Learn About Node JS
      </h2>
      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      Scalability :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      Node.js uses an event-driven, non-blocking I/O model that allows it to handle a large number of concurrent connections with high performance and low latency. This makes it ideal for building highly scalable applications, especially those that require real-time communication.
      </p>
      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      Efficiency :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      Node.js is built on top of the V8 JavaScript engine, which compiles JavaScript code into native machine code. This makes it faster and more efficient than other server-side environments, especially for I/O-bound operations.
      </p>
      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      Cross-platform :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      Node.js is a cross-platform environment that can be run on Windows, macOS, and Linux. This makes it easy to develop and deploy applications on different platforms without having to rewrite code.
      </p>
      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      Large ecosystem :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      Node.js has a large and active ecosystem of third-party modules and packages that can be easily installed and used in applications. This saves time and effort for developers and makes it easy to add new functionality to an application.
      </p>

      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      Easy to learn :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      Node.js uses JavaScript, which is a popular programming language that many developers are already familiar with. This makes it easy for developers to learn and start using Node.js quickly.
      </p>
      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      Support for real-time applications :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      Node.js is well-suited for building real-time applications such as chat applications, online gaming, and collaborative editing tools. Its event-driven, non-blocking I/O model allows it to handle a large number of concurrent connections with low latency, making it ideal for real-time applications.
      </p>
    </div>
    );
};

export default Node;