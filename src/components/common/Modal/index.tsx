import TaskForm from "@/components/Dashboard/TaskForm";
import { Task } from "@/types/task";
import React, { useEffect, useRef, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

interface ModalProps {
    data: Task | null;
    isOpen: boolean;
    onClose: () => void;
  }

  const Modal: React.FC<ModalProps> = ({data, isOpen, onClose }) => {

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
          <div className="p-6 bg-slate-100 dark:bg-black/50 dark:border-none rounded-lg shadow-lg">
            <div className="flex items-center justify-end">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <LiaTimesSolid className="h-7 w-7 p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-meta"/>
              </button>
            </div>
            <TaskForm handleClose={onClose} editData={data} />
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </div>
  );
};

export default Modal