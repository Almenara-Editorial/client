import { Checkbox, TextField } from '@/components/form'
import { Button, Link } from '@/components/shared'
import { Container, Row } from './styles'

export const LoginModalForm = () => (
  <Container>
    <TextField name="email" />
    <TextField name="password" type="password" />
    <Row>
      <Checkbox value={false}>Manter-me conectado</Checkbox>
      <Link href="#">Esqueceu a sua senha?</Link>
    </Row>
    <Button size="rg-full">Entrar</Button>
  </Container>
)

export default LoginModalForm
