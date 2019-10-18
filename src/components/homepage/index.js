import React from "react";
import Banner from "./banner";
import Content from "./content";
import Subscribe from "./subscribe";

const Homepage = () => {
  return (
    <div className={"homepage"}>
      <Banner />
      <Content />
      <Subscribe />
    </div>
  );
};

export default Homepage;
