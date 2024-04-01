'use client'
import { useState } from "react";
import TasksList from "./TaskList";
import tasks from "./task-mock-data"
import Modal from "../common//Modal/index"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="py-3">
        <TasksList tasks={tasks} addTaskHandler={openModal}/>
        <Modal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  );
}
