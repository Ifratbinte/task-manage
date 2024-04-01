import React from 'react'
import FormInput from '../common/FormElement/formInput'
import FormTextarea from '../common/FormElement/formTextarea'
import DatePicker from '../common/FormElement/DatePicker'
import { useForm } from 'react-hook-form';
import { space } from 'postcss/lib/list';
import Button from '../common/Button';

interface TaskFormData {
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<TaskFormData>();

  const onSubmit = (data: TaskFormData) => {
    console.log(data);
  };
  
  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <FormInput 
                label='Task Title' 
                placeholder='Enter task title' 
                type='text'
                {...register('title', { required: true })}
            />
            {errors.title && <span className="text-red-500">Title is required</span>}
          </div>
          <div className="w-full xl:w-1/2">
            <DatePicker 
                label='Due Date'
                {...register("dueDate", { required:true })}
            />
            {errors.dueDate && <span className="text-red-500">Due Date is required</span>}
          </div>
        </div>
        <div className="mb-4.5">
           <FormTextarea 
              label='Task Description' 
              placeholder='Write task description' 
              row={6}
              {...register('description', { required:true })}
           />
           {errors.description && <span className='text-red-500'>Description is required</span> }
        </div>
        <Button type="Submit" buttonText='Create Task'/>
    </form>
  )
}

export default TaskForm