import { FieldGroup, Label, TextField } from '@/components/form'
import { Checkmark } from '@/components/icons'
import { Anchor, Button } from '@/components/shared'
import { useCart } from '@/contexts'
import { FormEvent, useState } from 'react'
import { Container, Row } from './styles'

export const CartShippingForm = () => {
  const { loadShippingOptions } = useCart()
  const [zipCode, setZipCode] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    await loadShippingOptions(zipCode).catch((error) =>
      console.log('error', error.response)
    )
  }

  return (
    <Container>
      <Label htmlFor="cep">Frete e prazo de entrega</Label>
      <Row>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <TextField
              id="cep"
              mask="99999-999"
              placeholder="00000-000"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <Button color="neutral" outline>
              <i>
                <Checkmark />
              </i>
            </Button>
          </FieldGroup>
        </form>
        <Anchor
          href="https://buscacepinter.correios.com.br/app/endereco/index.php"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
        >
          Não sei meu CEP
        </Anchor>
      </Row>
    </Container>
  )
}
