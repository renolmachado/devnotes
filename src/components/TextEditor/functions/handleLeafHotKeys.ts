import React from 'react'
import { ReactEditor } from 'slate-react'

import { toggleMark } from '../components/Buttons/utils'
import { LeafFormat } from '../types'

export const handleLeafHotKeys =
  (mark: LeafFormat) => (editor: ReactEditor, event: React.KeyboardEvent) => {
    event.preventDefault()
    toggleMark(editor, mark)
  }
