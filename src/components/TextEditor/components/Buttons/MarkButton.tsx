import { useSlate } from 'slate-react'

import { Button } from './Buttons.styles'
import { LeafFormat } from '../../types'
import { isMarkActive, toggleMark } from './utils'
import { Icon } from '../Icon/Icon'

interface Props {
  format: LeafFormat
}

export const MarkButton = ({ format }: Props) => {
  const editor = useSlate()

  return (
    <Button
      type="button"
      isActive={isMarkActive(editor, format)}
      onMouseDown={(event: any) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon format={format} />
    </Button>
  )
}
