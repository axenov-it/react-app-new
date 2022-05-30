import { useState } from "react";

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRender, setIsRender] = useState(false);

  const onOpen = () => {
    setIsRender(true);

    setTimeout(() => {
      setIsOpen(true);
    });
  };

  const onClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      setIsRender(false);
    }, 1000);
  };

  return {
    isOpen,
    onOpen,
    onClose,
    isRender,
  };
};

export default usePopup;
