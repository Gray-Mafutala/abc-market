import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";

type ModalWrapperProps = {
  children: React.ReactNode;
  onClose: () => void;
  modalWrapperAddStyles?: string;
  innerWrapperStyles: string;
  closeBtnAddStyles?: string;
};

const ModalWrapper = ({
  children,
  onClose,
  modalWrapperAddStyles = "",
  innerWrapperStyles,
  closeBtnAddStyles = "",
}: ModalWrapperProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return createPortal(
    //  modal wrapper
    <div className={`${modalWrapperAddStyles} fixed w-full h-full z-50`}>
      {/* outer wrapper container (for adding scrollbar) */}
      <div
        onClick={onClose}
        className="block overflow-y-auto scrollbar-w-2 h-screen bg-black/10
        backdrop-blur-sm"
      >
        {/* inner wrapper */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={innerWrapperStyles}
        >
          {/* btn to close modal */}
          <button
            onClick={onClose}
            className={`${closeBtnAddStyles} absolute p-[6px]
            rounded-[50%] text-gray-700 bg-gray-50 duration-200
            hover:bg-blue-light hover:text-primary-blue
            shadow-[#43475545_0px_0px_0.25em,_#5a7dbc0d_0px_0.25em_1em]`}
          >
            <CgClose className="text-[22px]" />
          </button>

          {/* content */}
          {children}
        </div>
      </div>
    </div>,

    document.body
  );
};

export default ModalWrapper;
