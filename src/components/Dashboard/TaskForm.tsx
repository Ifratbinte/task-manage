import React, { useEffect, useState } from 'react'
import FormInput from '../common/FormElement/formInput'
import FormTextarea from '../common/FormElement/formTextarea'
import DatePicker from '../common/FormElement/DatePicker'
import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import { useDispatch } from 'react-redux';
import { addTask, clearSelectedTask, updateTask } from '@/lib/task/taskSlice';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { Task } from '@/types/task';

interface TaskFormData {
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm = ({
    handleClose,
    editData,
  }: {
    handleClose: () => void;
    editData?: Task | null;
}) => {

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
    reset
  } = useForm<TaskFormData>({mode: "all", defaultValues : {} , resolver: yupResolver<any>(schema)});
  const dispatch = useDispatch();

  console.log("get values", getValues());

  // onSubmit handler for task create
  const onSubmit = (data: TaskFormData) => {
    console.log(data);
    if (editData?.id) {
      dispatch(
        updateTask({
          id: editData.id,
          title: data.title,
          description: data.description,
          dueDate: new Date(data.dueDate),
        }),
      );
      reset({});
      dispatch(clearSelectedTask()); 
    } else {
      dispatch(
        addTask({
          id: Math.floor(Math.random() * 1000), // Generate random ID
          title: data.title,
          description: data.description,
          dueDate: new Date(data.dueDate),
        }),
      );
    }
    reset({});
    handleClose();
  };

  useEffect(() => {
    if (!editData?.id) {
      reset({});
      return
    };
    setValue("title", editData.title);
    editData.dueDate &&
      setValue("dueDate", new Date(editData.dueDate)?.toDateString());
    setValue("description", editData.description);
  }, [editData]);

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
        <Button
          type="Submit"
          buttonText={editData?.id ? "Update Task" : "Create Task"}
        />
    </form>
  )
}

export default TaskForm