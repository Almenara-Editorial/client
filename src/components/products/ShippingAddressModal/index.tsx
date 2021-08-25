import { Label, TextField } from '@/components/form'
import { Button, Modal, ModalProps } from '@/components/shared'
import { Container, Header, Content, FieldRow, Separator } from './styles'

export type ShippingAddressModalProps = Omit<ModalProps, 'children'>

export const ShippingAddressModal = (props: ShippingAddressModalProps) => (
  <Modal as={Container} {...props}>
    <Header>Escolha o endereço</Header>
    <Content>
      <Label htmlFor="cep">Digite o seu CEP:</Label>
      <FieldRow>
        <TextField autoFocus name="cep" id="cep" placeholder="00000-000" />
        <Button size="rg-smallest">Confirmar</Button>
      </FieldRow>
      <Separator>
        <span>ou</span>
      </Separator>
      <Button outline color="neutral">
        Faça login
      </Button>
    </Content>
  </Modal>
)

export default ShippingAddressModal
