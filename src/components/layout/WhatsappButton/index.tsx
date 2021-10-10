import { Whatsapp } from '@/components/icons'
import { Container } from './styles'

export const WhatsappButton = () => {
  function handleOpenWhatsapp() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    window
      .open(
        'https://api.whatsapp.com/send?phone=5541992702079&text=Ol%C3%A1%2C%20em%20que%20podemos%20te%20ajudar%20hoje%3F%20',
        '_blank'
      )!
      .focus()
  }

  return (
    <Container onClick={handleOpenWhatsapp}>
      <Whatsapp />
    </Container>
  )
}
