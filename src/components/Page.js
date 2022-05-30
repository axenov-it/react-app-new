/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Page = ({ children }) => (
  <div
    css={css`
      max-width: 1000px;
      margin: auto;
    `}
  >
    {children}
  </div>
);

export default Page;
