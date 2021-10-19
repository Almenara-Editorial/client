import { Label, TextField } from '@/components/form'
import { Button, Modal, ModalProps } from '@/components/shared'
import { CartItemModel, ShippingOptionModel } from '@/models'
import { loadShippingOptionsByZipCode } from '@/services'
import { FormEvent, useState } from 'react'
import { Container, Header, Form, FieldRow } from './styles'

export type OnSubmitSuccessful = {
  shippingOptions: ShippingOptionModel[]
  zipCode: string
}

export type ShippingAddressModalProps = Omit<ModalProps, 'children'> & {
  product: CartItemModel
  onSubmitSuccessful: (params: OnSubmitSuccessful) => void
}

export const ShippingAddressModal = ({
  onSubmitSuccessful,
  product,
  ...props
}: ShippingAddressModalProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [zipCode, setZipCode] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    await loadShippingOptionsByZipCode({
      zipCode,
      cart: [product]
    })
      .then((shippingOptions) => {
        onSubmitSuccessful && onSubmitSuccessful({ shippingOptions, zipCode })
      })
      .catch((error) => {
        console.log({ error })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Modal as={Container} {...props}>
      <Header>Escolha o endereço</Header>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="cep">Digite o seu CEP:</Label>
        <FieldRow>
          <TextField
            onChange={(e) => setZipCode(e.target.value)}
            mask="99999-999"
            autoFocus
            name="cep"
            id="cep"
            placeholder="00000-000"
            value={zipCode}
          />
          <Button size="rg-smallest" isLoading={isLoading}>
            Confirmar
          </Button>
        </FieldRow>
        {/* <Separator>
          <span>ou</span>
        </Separator>
        <Button outline color="neutral">
          Faça login
        </Button> */}
      </Form>
    </Modal>
  )
}

export default ShippingAddressModal
