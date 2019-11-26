import React from "react";
import Posts from "../post/Posts";

const Home = () => (
  <div>
    <div className="jumbotron text-center rounded-0 bg-dark text-light">
      <h2 className="font-weight-bold">SoWork</h2>
      <p className="lead font-italic">The new social network</p>
    </div>
    <div className="container text-center">
      <Posts />
    </div>
  </div>
);

export default Home;
