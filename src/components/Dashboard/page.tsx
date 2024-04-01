'use client'
import TasksList from "./TaskList";
import tasks from "./task-mock-data"

export default function Home() {
  return (
    <div className="py-3">
        <TasksList tasks={tasks}/>
    </div>
  );
}
