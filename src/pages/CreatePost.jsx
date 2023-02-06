import React from 'react';
import './CreatePost.css';  

const CreatePost = () => {
  return (
    <div className="createPost">
      {" "}
      <div className="cpContainer">
        <h1 className="cpTitle">Create A Post</h1>
        <div className="inputGp">
          <label>Title</label>
          <input type="text" placeholder="Title..." />
        </div>
        <div className="inputGp">
          <label>Posts: </label>
          <textarea type="text" placeholder="Posts..." />
        </div>
        <button className="postBtn">Post</button>
      </div>
    </div>
  )
}

export default CreatePost