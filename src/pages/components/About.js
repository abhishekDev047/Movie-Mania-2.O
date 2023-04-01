import React from "react";

const About = () => {
  return (
    <div className="flex flex-col flex-wrap items-center text-center">
      <div className="text-xl my-3"> Special Thanks to OMDb API</div>
      <div className="text-lg">The Open Movie Database</div>
      <div className="mb-5">This site is created  with the help of OMDb . The OMDb API is a RESTful web service to obtain movie information</div>
      <div> Check out the official site of  <a className="text-lg text-red-800" href="https://www.omdbapi.com/ " target="blank"> OMDb API</a></div>
    </div>
  );
};

export default About;
