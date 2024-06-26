import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";

type ModalWrapperProps = {
  children: React.ReactNode;
  onClose: () => void;
  withCloseBtn?: boolean;
  modalWrapperAddStyles?: string;
  innerWrapperStyles: string;
  closeBtnAddStyles?: string;
  isOpen: boolean;
};

const ModalWrapper = ({
  children,
  onClose,
  withCloseBtn = true,
  modalWrapperAddStyles = "",
  innerWrapperStyles,
  closeBtnAddStyles = "",
  isOpen,
}: ModalWrapperProps) => {
  useEffect(() => {
    if (isOpen === true) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  const handleClose = () => withCloseBtn && onClose();

  return createPortal(
    // modal wrapper
    <div className={`${modalWrapperAddStyles} fixed w-full h-full z-50`}>
      {/* outer wrapper container (for adding scrollbar) */}
      <div
        onClick={handleClose}
        className="block overflow-y-auto scrollbar-w-2 h-screen bg-black/10
        backdrop-blur-sm"
      >
        {/* inner wrapper */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={innerWrapperStyles}
        >
          {/* btn to close modal */}
          {withCloseBtn && (
            <button
              onClick={onClose}
              className={`${closeBtnAddStyles} absolute p-[6px] rounded-[50%] 
              text-gray-700 bg-gray-50 duration-200 hover:bg-blue-light
              hover:text-primary-blue shadow-[#43475545_0px_0px_0.25em,_#5a7dbc0d_0px_0.25em_1em]`}
            >
              <CgClose className="text-[22px]" />
            </button>
          )}

          {/* content */}
          {children}
        </div>
      </div>
    </div>,

    document.body
  );
};

export default ModalWrapper;
