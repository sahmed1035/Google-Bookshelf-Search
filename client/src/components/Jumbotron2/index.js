import React from "react";
import "./style.css";

function Jumbotron2() {
  return (
    <div className="jumbotron text-center">
      <h1>Bookshelf: Google Book Search</h1>
      <h5>Search and Save your Favorite Books! </h5>
      <a target="_blank" rel="noopener noreferrer" href="https://www.googleapis.com">
        Powered by Google Books API!
      </a>
    </div>
  );
}

export default Jumbotron2;
