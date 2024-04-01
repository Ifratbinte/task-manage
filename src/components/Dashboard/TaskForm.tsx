import React from 'react'
import FormInput from '../common/FormElement/formInput'
import FormTextarea from '../common/FormElement/formTextarea'

const TaskForm = () => {
  return (
    <form action="#">
        <div className="mb-4.5">
           <FormInput label='Task Title' placeholder='Enter task title' type='text'/>
        </div>
        <div className="mb-6">
           <FormTextarea label='Task Description' placeholder='Write task description' row={6}/>
        </div>

        <button className="flex w-full justify-center rounded bg-primary p-3 text-white text-lg font-semibold hover:bg-opacity-90">
            Create Task
        </button>
    </form>
  )
}

export default TaskForm