import { useEffect, useState } from "react";

const usePopup = (isClosePopup) => {
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

  useEffect(() => {
    if (isClosePopup) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosePopup]);

  return {
    isOpen,
    onOpen,
    onClose,
    isRender,
  };
};

export default usePopup;
