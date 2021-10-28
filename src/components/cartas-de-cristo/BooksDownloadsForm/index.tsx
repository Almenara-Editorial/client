import { FieldsWrapper } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { Button } from '@/components/shared'
import { useForm } from 'react-hook-form'
import { Container } from './styles'

type BooksDownloadsFormValues = {
  fullName: string
  email: string
}

type BooksDownloadsFormProps = {
  onFormSuccess: () => void
}

export const BooksDownloadsForm = ({
  onFormSuccess
}: BooksDownloadsFormProps) => {
  const formMethods = useForm<BooksDownloadsFormValues>()

  async function onSubmit(values: BooksDownloadsFormValues) {
    console.log({ values })
    onFormSuccess()
  }

  return (
    <Container>
      <h2>Download de livros</h2>
      <p>Preencha seus dados para fazer o download dos livros gratuitamente.</p>
      <RHFForm {...formMethods} onSubmit={onSubmit}>
        <FieldsWrapper>
          <RHFTextField name="fullName" label="Nome completo" />
          <RHFTextField name="email" label="E-mail" />
          <Button type="submit">Fazer o download</Button>
        </FieldsWrapper>
      </RHFForm>
    </Container>
  )
}
