import { BlockButton, MarkButton } from '../Buttons'
import { Container } from './Toolbar.styles'

export const Toolbar = () => {
  return (
    <Container>
      <BlockButton format="check-list-item" />
      <MarkButton format="bold" />
      <MarkButton format="lineThrough" />
      <MarkButton format="italic" />
      <MarkButton format="underline" />
      <MarkButton format="code" />
      <BlockButton format="bulleted-list" />
      <BlockButton format="numbered-list" />
      <BlockButton format="block-quote" />
    </Container>
  )
}
