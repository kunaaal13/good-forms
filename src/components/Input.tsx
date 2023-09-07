import * as React from 'react'

import { cn } from '../utils'

type InputProps = {
  error?: string
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, error, ...props }, ref) => {
    return (
      <div>
        <label
          htmlFor={props.id}
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
          ref={ref}
          autoComplete='off'
          {...props}
        />

        {error && <p className='text-pink-600 text-sm mt-1'>{error}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
