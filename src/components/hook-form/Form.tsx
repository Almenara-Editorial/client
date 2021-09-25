import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'

type FormProps<T> = UseFormReturn<T> & {
  children: React.ReactNode
  onSubmit: (values: T) => Promise<void>
}

export function RHFForm<T>({ children, onSubmit, ...rest }: FormProps<T>) {
  return (
    <FormProvider {...rest}>
      <form onSubmit={rest.handleSubmit(onSubmit as SubmitHandler<T>)}>
        {children}
      </form>
    </FormProvider>
  )
}
