import { useSlate } from 'slate-react'

import { Button } from './Buttons.styles'
import { LeafFormat } from '../../types'
import { isMarkActive, toggleMark } from './utils'
import { Icon } from '../Icon/Icon'
import { LEAF_COMMANDS_MAPPER } from '../../functions/hotkeys'

interface Props {
  format: LeafFormat
}

export const MarkButton = ({ format }: Props) => {
  const editor = useSlate()

  return (
    <Button
      type="button"
      title={LEAF_COMMANDS_MAPPER[format]}
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
