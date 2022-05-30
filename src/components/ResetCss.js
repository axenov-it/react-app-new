/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";

const ResetCss = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
      }

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default ResetCss;
