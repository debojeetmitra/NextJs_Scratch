import React from "react";

const AboutPage = () => {
  return (
    <div clasName="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us </h1>
        <p className="text-4xl text-gray-600">
          Learn more about our story and What drives us forward
        </p>
        <div className="prose prose-lg mx-auto mt-5">
          <div
            className="bg-white rounded-lg shadow-sm border p-8 mb-8
          border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Story
            </h2>

            <p className="text-gray-600 mb-4">
              Founded in 2026, MyWebsite started as a simple idea to create 
              beatiful, functional websites that anyone can 
              understand and maintain. We belive that great web
              development should be accessible to everyone.
            </p>

            <p className="text-gray-600">
              Our team is passionate about clean code, modern design, and 
              creating experiences that users love.We use the
              latest technologies like Next.js and TailwindCss to build
              fast, responsive websites.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
