import React, { useEffect, useState } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions/index";
import Posts from "./posts/Posts";
import "./home.css";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";

const Home = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts);
  const [isOpen, setIsOpen] = useState(false);
  //   const allImages = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(getAllPosts());
    // dispatch(getImages());
  }, [dispatch]);

  //   console.log(allImages)

  return (
    <div>
      <section className="Head">
        <div className="littleTitle">
          <h1>[</h1>
          <h5>Making your Life Easier</h5>
          <h1>]</h1>
        </div>
        <div className="title">Discovering the World</div>
      </section>     
      
      <Modal />
      
      <section>
        <div className="filtersList">
          <ul>
            <li>All</li>
            <li>Travel</li>
            <li>Lifestyle</li>
            <li>Business</li>
            <li>Food</li>
            <li>Work</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="posts">
          <Posts allPosts={allPosts} />
        </div>
      </section>
      

    </div>
  );
};

export default Home;
