import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

  const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    // Modal close when outside click start
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleOutsideClick);
      }

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [isOpen, onClose]);
    // Modal close when outside click end

  if (!isOpen) return null;

  return (
    <div className={`${isOpen ? "block" : "hidden"} fixed left-0 top-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-black/50 px-4 py-5`}>
      <div ref={modalRef} className="relative z-999 m-auto w-full max-w-180 rounded-sm shadow-default dark:border-strokeDark dark:bg-meta">
        {/* Modal content */}
        <div className="modal-body">
          <div className="p-6 bg-slate-100 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold">Modal Title</h1>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
               <FaTimes/>
              </button>
            </div>
            <p>Modal content goes here.</p>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </div>
  );
};

export default Modal