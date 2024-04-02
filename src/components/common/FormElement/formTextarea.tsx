import React from 'react'

interface FormTextareaProps{
    label: string
    row: any
    placeholder: string
    register: any,
    name:string
}

const FormTextarea:React.FC<FormTextareaProps> = ({label,row,placeholder, register, name}) => {
  return (
    <>
        <label className="mb-3 flex gap-[2px] text-sm font-medium text-black dark:text-white">
            {label}
            <span className='text-red-500'>*</span>
        </label>
        <textarea
            rows={row}
            placeholder={placeholder}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register(name, { required:true })}
            >
        </textarea>
    </>
  )
}

export default FormTextarea