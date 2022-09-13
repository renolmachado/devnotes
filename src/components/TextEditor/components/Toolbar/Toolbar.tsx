import { MarkButton } from '../MarkButton/MarkButton'

export const Toolbar = () => {
  return (
    <div>
      <MarkButton format="bold" icon="format_bold" />
      <MarkButton format="italic" icon="format_bold" />
      <MarkButton format="underline" icon="format_bold" />
      <MarkButton format="code" icon="format_bold" />
    </div>
  )
}
