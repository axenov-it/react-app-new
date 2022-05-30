/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import PopupCard from "./components/PopupCard";
import usePopup from "./hooks/usePopup";

function Popup({ title, buttonName, children, isClosePopup }) {
  const { isOpen, isRender, onClose, onOpen } = usePopup();

  useEffect(() => {
    if (isClosePopup) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosePopup]);

  return (
    <div>
      <button onClick={onOpen}>{buttonName}</button>
      {isRender && (
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #0000005e;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 1s;
            opacity: ${isOpen ? "1" : "0"};
          `}
        >
          <PopupCard isOpen={isOpen}>
            <h2
              css={css`
                margin: 0;
              `}
            >
              {title}
            </h2>
            <span
              css={css`
                position: absolute;
                right: 5px;
                top: 5px;
              `}
              onClick={onClose}
            >
              X
            </span>
            {children}
          </PopupCard>
        </div>
      )}
    </div>
  );
}

export default Popup;
