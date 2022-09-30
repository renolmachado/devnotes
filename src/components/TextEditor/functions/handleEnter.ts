import React from 'react'
import { ReactEditor } from 'slate-react'

import { Descendant } from '../types'

const EMPTY_NODE = {
  children: [{ text: '' }],
  style: { textAlign: 'left' },
}

export const handleEnter = (
  editor: ReactEditor,
  event: React.KeyboardEvent
) => {
  const fragments = editor.getFragment()
  const { type } = fragments[fragments.length - 1] as Descendant

  if (type === 'check-list-item') {
    event.preventDefault()
    const node = {
      ...EMPTY_NODE,
      type: 'check-list-item',
      checked: false,
    } as Descendant

    editor.insertFragment([...fragments, node])
    editor.insertText(' ')
    editor.deleteBackward('character')
  }
}
