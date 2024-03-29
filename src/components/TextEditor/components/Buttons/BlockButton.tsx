import { useSlate } from 'slate-react'

import { BLOCK_COMMANDS_HOTKEYS } from '../../functions/hotkeys'
import { ElementFormat } from '../../types'
import { Icon } from '../Icon/Icon'
import { Button } from './Buttons.styles'
import { isBlockActive, TEXT_ALIGN_TYPES, toggleBlock } from './utils'

interface Props {
  format: ElementFormat
}

export const BlockButton = ({ format }: Props) => {
  const editor = useSlate()

  return (
    <Button
      title={BLOCK_COMMANDS_HOTKEYS[format]}
      isActive={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
      )}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon format={format} />
    </Button>
  )
}
