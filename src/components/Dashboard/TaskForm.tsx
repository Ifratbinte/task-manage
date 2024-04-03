import React, { useState } from 'react'
import FormInput from '../common/FormElement/formInput'
import FormTextarea from '../common/FormElement/formTextarea'
import DatePicker from '../common/FormElement/DatePicker'
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import { useDispatch } from 'react-redux';
import { addTask } from '@/lib/task/taskSlice';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

interface TaskFormData {
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm = () => {

  const schema = yup.object().shape({
    title: yup.string().required(),
    dueDate: yup.date().required(),
    description: yup.string().required(),
  });

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    getValues,
    setValue,
  } = useForm<TaskFormData>({mode: "all" , resolver: yupResolver<any>(schema)});
  const dispatch = useDispatch();

  console.log("get values", getValues());

  // onSubmit handler for task create
  const onSubmit = (data: TaskFormData) => {
    console.log(data);
    dispatch(
      addTask({
        id: Math.floor(Math.random() * 1000), // Generate random ID
        title: data.title,
        description: data.description,
        dueDate: new Date(data.dueDate),
      }),
      // updateTask({
      //   id: Math.floor(Math.random() * 1000), // Generate random ID
      //   title: data.title,
      //   description: data.description,
      //   dueDate: new Date(data.dueDate),
      // })
    );
  };

  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <FormInput 
                label='Task Title' 
                placeholder='Enter task title' 
                type='text'
                register={register}
                name= "title"
            />
            {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
          </div>
          <div className="w-full xl:w-1/2">
            <DatePicker 
                label='Due Date'
                register={register}
                name='dueDate'
            />
            {errors.dueDate && <span className="text-red-500 text-sm">Due Date is required</span>}
          </div>
        </div>
        <div className="mb-4.5">
           <FormTextarea 
              label='Task Description' 
              placeholder='Write task description' 
              row={6}
              register={register}
              name='description'
           />
           {errors.description && <span className='text-red-500 text-sm'>Description is required</span> }
        </div>
        <Button type="Submit" buttonText='Create Task'/>
    </form>
  )
}

export default TaskForm