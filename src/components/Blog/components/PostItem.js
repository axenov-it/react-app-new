/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const PostItem = ({ data: { title, author, description } }) => (
  <div
    css={css`
      width: 220px;
      box-shadow: 0px 0px 2px 0px #000;
      margin: 15px;
      text-align: center;
    `}
  >
    <h2>{title}</h2>
    <h3>{author}</h3>
    <p>{description}</p>
  </div>
);

export default PostItem;
