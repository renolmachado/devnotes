import React from 'react'
import { ReactEditor } from 'slate-react'

import { Descendant } from '../types'

const EMPTY_NODE = {
  children: [{ text: '' }],
  style: { textAlign: 'left' },
}

export const handleShiftEnter = (
  editor: ReactEditor,
  event: React.KeyboardEvent
) => {
  event.preventDefault()
  editor.insertNode({ ...EMPTY_NODE } as Descendant)
  editor.insertText(' ')
  editor.deleteBackward('character')
}
