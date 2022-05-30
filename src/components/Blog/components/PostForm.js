const PostForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input name="title" placeholder="Enter name" />
    <textarea name="description" placeholder="Enter description" />
    <button data-status="close">Add post</button>
  </form>
);

export default PostForm;
