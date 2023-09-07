import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { z } from 'zod'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { DivSelect } from './components/Select2'

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Name must be at least 3 characters long',
    })
    .max(20, {
      message: 'Name must be at most 20 characters long',
    }),

  age: z
    .number({
      invalid_type_error: 'Please enter a valid age',
    })
    .min(18, {
      message: 'You must be at least 18 years old to use this service',
    }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),

  role: z.string(),
})

type FormValues = z.infer<typeof formSchema>

const roles = ['user', 'admin', 'super-admin']

let count = 0

function App() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: 0,
      email: '',
      role: 'user',
    },
    shouldUseNativeValidation: false,
  })

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    toast.success('Form submitted successfully')
    console.log(values)
  }

  count++

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <Toaster />

      <div className='absolute top-0 right-0 m-5 text-gray-900'>
        <p>Render Count: {count}</p>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 w-1/2 border p-10 rounded-md'
      >
        <Input
          label='User Name'
          {...form.register('name')}
          error={form.formState.errors.name?.message}
        />

        <Input
          label='Age'
          type='number'
          {...form.register('age', { valueAsNumber: true, required: false })}
          error={form.formState.errors.age?.message}
        />

        <Input
          label='Email Address'
          type='email'
          {...form.register('email')}
          error={form.formState.errors.email?.message}
        />

        <DivSelect control={form.control} name='role' values={[...roles]} />

        <div className='flex justify-center'>
          <Button type='submit' className='w-1/2 py-3'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default App