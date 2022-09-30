import React from 'react'
import { ReactEditor } from 'slate-react'

import { toggleBlock } from '../components/Buttons/utils'
import { ElementFormat } from '../types'

export const handleElementHotKeys =
  (format: ElementFormat) =>
  (editor: ReactEditor, event: React.KeyboardEvent) => {
    event.preventDefault()
    toggleBlock(editor, format)
  }
