import React from 'react'

interface FormInputProps{
    label: string
    type: string
    placeholder: string
    register: any,
    name:string
}

const FormInput:React.FC<FormInputProps> = ({label, type, placeholder, register, name}) => {
  return (
    <>
        <label className="mb-3 flex gap-[2px] text-sm font-medium text-black dark:text-white">
            {label}
            <span className='text-red-500'>*</span>
        </label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokeDark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register(name, { required: true })}
        />
    </>
  )
}

export default FormInput