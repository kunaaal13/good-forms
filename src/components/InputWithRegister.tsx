/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegisterReturn } from 'react-hook-form'
import { cn } from '../utils'
import React from 'react'

type InputWithRegisterProps = {
  label?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement> &
  Omit<UseFormRegisterReturn, 'ref'>

const InputWithRegister = React.forwardRef<
  HTMLInputElement,
  InputWithRegisterProps
>(function InputWithRegister(
  { label, type = 'text', className, error, id, ...props },
  ref
) {
  return (
    <div>
      <label
        htmlFor={id}
        className='
          block 
          text-sm 
          leading-6 
          text-gray-900
          mb-2
        '
      >
        {label}
      </label>

      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
          error && 'border-pink-600'
        )}
        autoComplete='off'
        ref={ref}
        {...props}
      />

      {error && <p className='text-pink-600 text-sm mt-1'>{error}</p>}
    </div>
  )
})

export default InputWithRegister
