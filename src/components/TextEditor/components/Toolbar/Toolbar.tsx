import { MarkButton } from '../MarkButton/MarkButton'

export const Toolbar = () => {
  return (
    <div>
      <MarkButton format="bold" />
      <MarkButton format="italic" />
      <MarkButton format="underline" />
      <MarkButton format="code" />
    </div>
  )
}
