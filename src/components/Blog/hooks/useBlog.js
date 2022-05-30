import { useState } from "react";
import dataPosts from "../../../posts.json";

import { useStorage } from "../../../shared";

const useBlog = () => {
  const { setJsonItem, getJsonItem } = useStorage();

  if (!getJsonItem("posts")) {
    setJsonItem("posts", dataPosts);
  }

  const [posts, setPosts] = useState(getJsonItem("posts"));

  const [isClosePopup, setIsClosePopup] = useState(false);

  const addPost = (event) => {
    event.preventDefault();

    const post = {
      id: posts.length + 1,
      title: event.target.title.value,
      description: event.target.description.value,
    };

    const newPosts = [...posts, post];

    setJsonItem("posts", newPosts);

    setPosts(newPosts);

    setIsClosePopup(true);

    setTimeout(() => {
      setIsClosePopup(false);
    }, 1000);
  };

  return {
    posts,
    addPost,
    isClosePopup,
  };
};

export default useBlog;
