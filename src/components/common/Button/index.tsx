import React from 'react'

interface ButtonProps{
    buttonIcon?: any
    buttonText: string
    onClick?: () => void;
    type?: any
}

const Button:React.FC<ButtonProps> = ({buttonText, buttonIcon, onClick, type}) => {
  return (
    <button type={type} className="flex items-center gap-2 rounded bg-primary px-4.5 py-2 font-medium text-white hover:bg-opacity-80" onClick={onClick}>
        {buttonIcon}
        {buttonText}
    </button>
  )
}

export default Button