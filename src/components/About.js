import React from "react";
import HomeReturn from "./HomeReturn";

const About = () => {
  return (
    <React.Fragment>
      <div className="container py-5 my-5 border-bottom">
        <h2 className="text-center">
          <i className="bi bi-file-earmark-person-fill"></i>
        </h2>
        <h1 className="container text-center">I am the About page</h1>
        <HomeReturn />
      </div>
      <div className="image"></div>
    </React.Fragment>
  );
};

export default About;
