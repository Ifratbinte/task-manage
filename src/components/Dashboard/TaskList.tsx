// components/TasksList.tsx

import React from 'react';
import { Task } from '@/types/task';

interface Props {
  tasks: Task[];
}

const TasksList: React.FC<Props> = ({ tasks }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>
      <table className="border-collapse table-fixed w-full text-sm">
        <thead className='dark:bg-meta'>
          <tr className='border-b dark:border-slate-600 font-medium p-4 text-slate-700 dark:text-slate-200 text-left text-base'>
            <th className='pl-8 py-3'>Title</th>
            <th className='px-8 pb-y'>Description</th>
            <th className='pr-8 pb-y'>Due Date</th>
          </tr>
        </thead>
        <tbody className='bg-white dark:bg-slate-800'>
          {tasks.map((task) => (
            <tr key={task.title} className='border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-base'>
              <td className="pl-8 py-3">{task.title}</td>
              <td className='px-8 py-3'>{task.description}</td>
              <td className="pr-8 py-3">{task.dueDate.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksList;
