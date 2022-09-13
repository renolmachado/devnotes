import { MarkButton } from '../MarkButton/MarkButton'
import { Container } from './Toolbar.styles'

export const Toolbar = () => {
  return (
    <Container>
      <MarkButton format="bold" />
      <MarkButton format="italic" />
      <MarkButton format="underline" />
      <MarkButton format="code" />
    </Container>
  )
}
