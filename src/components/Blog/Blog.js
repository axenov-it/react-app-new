import { useState } from "react";
import dataPosts from "../../posts.json";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Popup from "../Popup";

function Blog() {
  const [posts, setPosts] = useState(dataPosts);
  const [isClosePopup, setIsClosePopup] = useState(false);

  const addPost = (event) => {
    event.preventDefault();

    const post = {
      id: posts.length + 1,
      title: event.target.title.value,
      description: event.target.description.value,
    };

    setPosts([...posts, post]);

    setIsClosePopup(true);

    setTimeout(() => {
      setIsClosePopup(false);
    }, 1000);
  };

  return (
    <div>
      <Popup buttonName="Add post" isClosePopup={isClosePopup}>
        <PostForm onSubmit={addPost} />
      </Popup>

      <PostList posts={posts} />
    </div>
  );
}

export default Blog;
