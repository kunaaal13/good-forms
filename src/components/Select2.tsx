import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form'
import { cn } from '../utils'

type SelectOptionType = {
  value: string
  label: string
  sublabel?: string
}

type DivSelectProps = {
  values: SelectOptionType[]
  handleChange: (value: SelectOptionType) => string
  renderOption: (value: SelectOptionType) => React.ReactNode
}

function DivSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: DivSelectProps & UseControllerProps<TFieldValues, TName>) {
  const control = useController(props)

  return (
    <div>
      <label
        htmlFor={props.name}
        className='
          block 
          text-sm 
          leading-6  
          text-gray-900
          mb-2
        '
      >
        {props.name}
      </label>

      <div className='flex items-center flex-wrap gap-x-5 gap-y-10'>
        {props.values.map((value) => {
          return (
            <button
              type='button'
              key={value.value}
              className={cn(
                'py-3 px-5 rounded-md',
                control.field.value === value
                  ? 'bg-black text-white'
                  : 'border text-gray-900'
              )}
              onClick={() => {
                const res = props.handleChange(value)
                control.field.onChange(res)
              }}
            >
              {props.renderOption(value)}
            </button>
          )
        })}
      </div>

      {control.fieldState.error && (
        <p className='text-pink-600 text-sm mt-1'>
          {control.fieldState.error.message}
        </p>
      )}
    </div>
  )
}

export { DivSelect }
