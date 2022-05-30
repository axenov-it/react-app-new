/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const PopupCard = ({ children, isOpen }) => (
  <div
    css={css`
      @keyframes show {
        from {
          top: -500px;
        }

        to {
          top: 0;
        }
      }

      @keyframes hide {
        from {
          top: 0;
        }

        to {
          top: -500px;
        }
      }
      top: -500px;
      max-width: 300px;
      box-shadow: 0 0 0 0 black;
      position: relative;
      max-width: 300px;
      box-shadow: 0 0 3px 2px #00000057;
      position: relative;
      background: white;
      padding: 15px;
      animation: ${isOpen ? "show" : "hide"} 1s;
      animation-fill-mode: forwards;
    `}
  >
    {children}
  </div>
);

export default PopupCard;
