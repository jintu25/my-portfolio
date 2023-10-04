import React from "react";

const ReactJs = () => {
  return (
    <div className="mx-12 my-6 ">
      <h2 className="text-white font-semibold text-3xl">What is React ?</h2>
      <p className="text-slate-300 font-normal mt-3">
        <a href="https://react.dev/learn" className="text-sky-400">
          React
        </a>{" "}
        is a popular open-source JavaScript library for building user
        interfaces. It was developed by Facebook and is now maintained by
        Facebook and a community of developers. React is used by many large
        companies including Instagram, Airbnb, and Netflix. React provides a
        component-based approach to building UIs. A component is a reusable
        piece of code that defines the structure and behavior of a UI element.
        Components can be composed and nested to build complex UIs. React also
        provides a virtual DOM (Document Object Model) which allows it to
        efficiently update and render components in response to changes in the
        underlying data.
      </p>
      <h2 className="text-white font-semibold text-3xl mt-6">
        Learn About React JS
      </h2>
      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      Reusable Components :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      React provides a component-based approach to building UIs, which allows developers to create reusable and modular UI components. This makes it easier to maintain and update code, and also saves time in the development process.
      </p>
      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      Virtual DOM :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      React uses a virtual DOM, which allows it to update the UI efficiently and quickly. The virtual DOM only updates the parts of the UI that have changed, rather than re-rendering the entire page. This improves the performance of the application, especially for large and complex applications.
      </p>
      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      Declarative Syntax :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      React uses a declarative syntax, which means that developers only need to describe what they want the UI to look like, rather than how to achieve it. This makes the code easier to understand and reduces the likelihood of bugs.
      </p>
      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      SEO Friendly :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      React is SEO friendly because it can be rendered on the server-side using libraries like Next.js. This means that search engines can easily crawl the application and index its content.
      </p>

      <h4 className="text-xl font-semibold mt-5 text-blue-500">
      Large Ecosystem :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      React has a large and active ecosystem of third-party packages and tools, making it easy to extend and customize the functionality of a React application.
      </p>
      <h4 className="text-xl font-semibold mt-5 text-blue-500">
        Mobile Support :
      </h4>
      <p className="text-slate-300 font-normal mt-2">
      React Native, a framework based on React, allows developers to build mobile applications using the same component-based approach as React for web development.
      </p>
    </div>
  );
};

export default ReactJs;
