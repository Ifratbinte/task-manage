import React from 'react'

interface FormTextareaProps{
    label: string
    row: any
    placeholder: string
}

const FormTextarea:React.FC<FormTextareaProps> = ({label,row,placeholder}) => {
  return (
    <>
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            {label}
        </label>
        <textarea
            rows={row}
            placeholder={placeholder}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            >
        </textarea>
    </>
  )
}

export default FormTextarea