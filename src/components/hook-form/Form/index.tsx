import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { LoaderOverlay } from '@/components/shared'
import { Container } from './styles'

type FormProps<T> = UseFormReturn<T> & {
  children: React.ReactNode
  onSubmit: (values: T) => Promise<void>
  isLoading?: boolean
}

export function RHFForm<T>({
  children,
  onSubmit,
  isLoading,
  ...rest
}: FormProps<T>) {
  return (
    <FormProvider {...rest}>
      <form onSubmit={rest.handleSubmit(onSubmit as SubmitHandler<T>)}>
        <Container>
          {isLoading && <LoaderOverlay />}
          {children}
        </Container>
      </form>
    </FormProvider>
  )
}
