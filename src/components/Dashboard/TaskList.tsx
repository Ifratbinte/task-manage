'use client'
import React, { useState } from 'react';
import { Task } from '@/types/task';
import { useDispatch } from 'react-redux';
import { addTask, toggleTaskCompletion, deleteTask } from '@/lib/task/taskSlice';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import Button from '../common/Button';

interface Props {
  tasks: Task[];
  addTaskHandler: () => void;
}

const TasksList: React.FC<Props> = ({ tasks , addTaskHandler}) => {
  const dispatch = useDispatch();

  // task completion handler
  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(tasks.id));
  };

  // task delete handler
  const handleDelete = () => {
    dispatch(deleteTask(tasks.id));
  };
  
  return (
    <div className="bg-gray-100 p-4">

      {/* Task list Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold mb-4">Task List</h2>
        <Button buttonIcon={<FaPlus/>} buttonText='Add Task' onClick={addTaskHandler}/>
      </div>

      {/* Task list Table */}
      <table className="border-collapse table-auto w-full text-sm">
        <thead className='dark:bg-meta'>
          <tr className='border-b dark:border-slate-600 font-medium p-4 text-slate-700 dark:text-slate-200 text-left text-base'>
            <th className='pl-8 py-3'>Title</th>
            <th className='px-8 pb-y'>Description</th>
            <th className='pr-8 pb-y'>Due Date</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-white dark:bg-slate-800'>
          {/* task list container start */}
          {tasks.map((task) => (
            <tr key={task.title} className='border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-base'>
              <td className="pl-8 py-3 flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={handleToggleCompletion}
                />
                {task.title}
              </td>
              <td className='px-8 py-3'>{task.description}</td>
              <td className="pr-8 py-3">{task.dueDate.toDateString()}</td>
              <td className='text-center'>
                <button onClick={handleDelete} className="text-red-400 hover:text-red-600">
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>
          ))}
          {/* task list container end */}
        </tbody>
      </table>
    </div>
  );
};

export default TasksList;
