import * as React from 'react'

import { cn } from '../utils'

type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
          className
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
