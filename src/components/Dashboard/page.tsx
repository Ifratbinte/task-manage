'use client'
import { useState } from "react";
import TasksList from "./TaskList";
import Modal from "../common//Modal/index"
import { Task } from "@/types/task";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTask, setEditTask] = useState<Task | null>(null);

  // open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Edit
  const handleEdit = (data: Task) => {
    setEditTask(data);
    setIsModalOpen(true);
  };

  return (
    <div className="py-3">
        <TasksList addTaskHandler={openModal} handleEdit={handleEdit} />
        <Modal isOpen={isModalOpen} onClose={closeModal}  data={editTask} />
    </div>
  );
}
