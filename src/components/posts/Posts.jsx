import React from "react";
import "./posts.css";
import { Link } from "react-router-dom";

const Posts = (allPosts) => {
  let post = allPosts;

  return (
    <div className="postsContainer">
      {post.allPosts &&
        post.allPosts?.map((p) => (
          <div
            key={p.id}
            className=" postCard"
            style={{
              backgroundImage: `url("https://source.unsplash.com/random/${p.id}")`,
            }}
          >
            <div className="infoCard">
              <Link
                     to={`/post/${p.id} `}
                  state= {{
                    name: p.name,
                    body: p.body,
                    image: `https://source.unsplash.com/random/${p.id}`                  
                }}
              >
                <h1>{p.name}</h1>
                <p>{p.body}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
