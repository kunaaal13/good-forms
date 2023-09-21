import { cn } from '../utils'

type SelectProps<T> = {
  name: string
  options: T[]
  isSelected: (option: T) => boolean
  onChange: (option: T) => void
  renderOption: (option: T) => React.ReactNode
  error?: string
  noOfColumns?: number
}

function Select<T>({
  name,
  options,
  isSelected,
  onChange,
  renderOption,
  error,
  noOfColumns = 3,
}: SelectProps<T>) {
  return (
    <div>
      <label
        htmlFor={''}
        className='
          block 
          text-sm 
          leading-6 
          text-gray-900
          mb-2
        '
      >
        {name}
      </label>

      <div className='flex items-center flex-wrap gap-x-5 gap-y-10'>
        {options.map((item, index) => {
          const isSelectedItem = isSelected(item)
          return (
            <button
              type='button'
              key={index}
              className={cn(
                'py-3 px-4 w-1/3 rounded-md',
                isSelectedItem ? 'bg-black text-white' : 'border text-gray-900'
              )}
              onClick={() => {
                onChange(item)
              }}
            >
              {renderOption(item)}
            </button>
          )
        })}
      </div>

      {error && <p className='text-pink-600 text-sm mt-1'>{error}</p>}
    </div>
  )
}

export default Select
