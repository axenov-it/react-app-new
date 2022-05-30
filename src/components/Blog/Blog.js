import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Popup from "../Popup";
import useBlog from "./hooks/useBlog";

function Blog() {
  const { addPost, isClosePopup, posts } = useBlog();

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
