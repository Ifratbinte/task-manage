import React from 'react'
import FormInput from '../common/FormElement/formInput'
import FormTextarea from '../common/FormElement/formTextarea'
import DatePicker from '../common/FormElement/DatePicker'

const TaskForm = () => {
  return (
    <form action="#">
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <FormInput label='Task Title' placeholder='Enter task title' type='text'/>
          </div>
          <div className="w-full xl:w-1/2">
            <DatePicker label='Due Date'/>
          </div>
        </div>
        <div className="mb-4.5">
           <FormTextarea label='Task Description' placeholder='Write task description' row={6}/>
        </div>

        <button className="flex w-full justify-center rounded bg-primary p-3 text-white text-lg font-semibold hover:bg-opacity-90">
            Create Task
        </button>
    </form>
  )
}

export default TaskForm