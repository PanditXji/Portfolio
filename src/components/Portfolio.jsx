import React from "react";
import netflix from "../assets/portfolio/netflix.png";
import Pblog from "../assets/portfolio/blog.png";
import mailer from "../assets/portfolio/nodemailer.png";
import passop from "../assets/portfolio/passop.png";
import todo from "../assets/portfolio/todo.png";
import cloud from "../assets/portfolio/cloud.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netflix,
      name: "Netflix-Clone",
      href: "https://netclone123.netlify.app/",
      code: "https://github.com/PanditXji/netflix-clone",
      details:
        "A responsive Netflix-Clone Page for Testing made by using HTML, CSS",
    },

    {
      id: 2,
      src: Pblog,
      name: "Full Stack Blog",
      href: "#",
      code: "https://github.com/PanditXji/fullstack-blog-app",
      details:
        "My portfolio website with parallax effect which I designed using HTML, CSS and JavaScript.",
    },

    {
      id: 3,
      src: mailer,
      name: "Node-Mailer App",
      href: "#",
      code: "https://github.com/PanditXji/NodeMailer-App",
      details:
        "An image generating platform built by using MERN stack and OpenAI.",
    },
    {
      id: 4,
      src: passop,
      name: "PassOP",
      href: "https://passopvishal.netlify.app",
      code: "#",
      details: "Your Own Password Manager App .",
    },
    {
      id: 5,
      src: todo,
      name: "Todo-List.",
      href: "https://todolistapp-vishal.netlify.app",
      code: "https://github.com/PanditXji/todo-list",
      details: "Todo List App for adding Todos.",
    },
    {
      id: 6,
      src: cloud,
      name: "Salesforce Website",
      href: "#",
      code: "#",
      details: "Currently working on Salesforce CloudMetic Website",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-20 pb-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full p-4 ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Some of my recent projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, name, src, href, code, details }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200" />
              <p className="text-xl text-center mt-2">{name}</p>
              <p className="text-center m-1 text-gray-500">{details}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 hover:font-bold">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 hover:font-bold">
                  <a href={code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <p className="mt-20">
          Check my{" "}
          <a
            href="https://github.com//"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:scale-105"
          >
            GitHub{" "}
          </a>{" "}
          to see more
        </p> */}
      </div>
    </div>
  );
};

export default Portfolio;
