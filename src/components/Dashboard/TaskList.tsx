'use client'
import React, { useState } from 'react';
import { Task } from '@/types/task';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTaskCompletion, deleteTask } from '@/lib/task/taskSlice';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import Button from '../common/Button';
import FormSelectStatus from '../common/FormElement/FormSelectStatus';
import { RootState } from '@/lib/store';

interface Props {
  addTaskHandler: () => void;
  handleEdit: (data: Task) => void;
}

const TasksList: React.FC<Props> = ({ addTaskHandler, handleEdit}) => {

  const selectFilteredTasks = (state: RootState) => {
    const { tasks, filter } = state.task;
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    } else if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    } else if (filter === 'all') {
      return tasks;
    } 
    return tasks; // For "all" filter
  };
 
  const dispatch = useDispatch();
  const tasks = useSelector(selectFilteredTasks);

  console.log("tasks", tasks);
  
  // task completion handler
  const handleToggleCompletion = (id:number) => {
    dispatch(toggleTaskCompletion(id));
  };

  // task delete handler
  const handleDelete = (id:number) => {
    dispatch(deleteTask(id));
  };
  
  return (
    <div className="bg-gray-100 p-4">

      {/* Task list Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <h2 className="text-xl font-semibold mb-4">Task List</h2>
        <div className="flex items-center gap-6">
          {/* Filter task */}
          <FormSelectStatus/>
          {/* Add task */}
          <Button buttonIcon={<FaPlus/>} buttonText='Add Task' onClick={addTaskHandler}/>
        </div>
      </div>

      {/* Task list Table */}
      <div className="overflow-x-auto lg:overflow-x-hidden">
        <table className="border-collapse table-auto w-full text-sm">
          <thead className='dark:bg-meta'>
            <tr className='border-b border-slate-300 dark:border-slate-600 font-medium p-4 text-slate-700 dark:text-slate-200 text-left text-base'>
              <th className='pl-8 py-2'>Title</th>
              <th className='px-8 pb-2'>Description</th>
              {/* <th className='pr-8 pb-2'>Status</th> */}
              <th className='pr-8 pb-2'>Due Date</th>
              <th className='pr-8 text-center'>Action</th>
            </tr>
          </thead>
          
          <tbody className='bg-white dark:bg-slate-800'>
              {tasks.length === 0 ? 
              <tr>
                <td colSpan={4} className='text-center py-4 text-base'>No Data Found</td>
              </tr> 
              : 
              <>
                {tasks.map((task:any) => (
                  <tr key={task.title} className='border-b border-slate-100 cursor-pointer dark:border-slate-700 text-slate-500 dark:text-slate-400 text-base' >
                    
                    <td className="pl-8 py-3 flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleCompletion(task.id)}
                      />
                      <span className={`${task.completed ? "line-through" : ""} font-semibold`} onClick={() => handleEdit(task)}>{task.title}</span>
                    </td>
                    <td className='px-8 py-3' onClick={() => handleEdit(task)}>{task.description}</td>
                    {/* <td className="pr-8 py-3">{task.status}</td> */}
                    <td className="pr-8 py-3" onClick={() => handleEdit(task)}>{new Date(task?.dueDate).toDateString()}</td>
                    <td className='pr-8 text-center'>
                      <button onClick={()=> handleDelete(task.id)} className="text-red-400 hover:text-red-600">
                        <FaTrashAlt/>
                      </button>
                    </td>
                  </tr>
                ))}
              </>
              }
              
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksList;
