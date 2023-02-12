import React, { useState } from 'react'
import './posts.css'
import axios from 'axios';

const Posts = (allPosts) => {

    let post = allPosts;
    // console.log("POST", post.allPosts)
    const [images, setImages] = useState([])
    const getAPI = async() =>{
        const res = await axios.get(`https://source.unsplash.com/random`);
        const data = await res.data
        setImages(data)
    }

  return (
       
    <div className='postsContainer'>
        {post.allPosts && post.allPosts?.map((p) => (
            <div className=' postCard' key={p.id} style={{backgroundImage: `${images}`}}>
                <h1>{p.name}</h1>
                <p>{p.body}</p>
            </div>
        ))}
    </div>
       
  )

}

export default Posts;