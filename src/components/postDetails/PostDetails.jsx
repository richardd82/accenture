import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./postDetails.css";

const PostDetails = () => {
  const location = useLocation();
  const { name, body, image } = location.state;
  console.log(image);

  // let title = name;
  // let description = body;

  return (
    <>
      <section className="Head">
        <div className="littleTitle">
          <h1>[</h1>
          <h5>Making your Life Easier</h5>
          <h1>]</h1>
        </div>
        <div className="title">Discovering the World</div>
      </section>
      <Link to="/" className="linkReturn">{"<"} View Posts</Link>
      <div
        className="containerPostDetails"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="imgTitle title">{name}</div>
      </div>
      <div className="bodyDetails">
        <p>{body}</p>
      </div>
    </>
  );
};

export default PostDetails;
