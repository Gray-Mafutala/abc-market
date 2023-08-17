import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";

type ModalWrapperProps = {
  children: React.ReactNode;
  onClose: () => void;
  modalWrapperAddStyles?: string;
  modalContentContainerStyles: string;
  closeBtnAddStyles?: string;
};

const ModalWrapper = ({
  children,
  onClose,
  modalWrapperAddStyles = "",
  modalContentContainerStyles,
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
      {/* background container for closing modal */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/10 backdrop-blur-sm"
      ></div>

      {/* content container */}
      <div
        className={`${modalContentContainerStyles} overflow-y-auto
        scrollbar-w-2`}
      >
        {/* btn to close modal */}
        <button
          onClick={onClose}
          className={`${closeBtnAddStyles} absolute top-2 right-4 p-[6px]
          bg-blue-light text-gray-700 rounded-[50%] duration-200 
          hover:bg-gray-100`}
        >
          <CgClose className="text-[22px]" />
        </button>

        {/* content */}
        {children}
      </div>
    </div>,

    document.body
  );
};

export default ModalWrapper;
