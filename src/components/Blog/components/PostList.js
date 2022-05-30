/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import PostItem from "./PostItem";

function PostList({ posts }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        @media (max-width: 768px) {
          justify-content: center;
        }
      `}
    >
      {posts.map((item) => (
        <PostItem key={item.id} data={item} />
      ))}
    </div>
  );
}

export default PostList;
