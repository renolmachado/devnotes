import isHotkey from 'is-hotkey'
import React from 'react'
import { ReactEditor } from 'slate-react'

import { HOTKEYS } from './hotkeys'

export const handleKeyDown =
  (editor: ReactEditor) => (event: React.KeyboardEvent) => {
    Object.keys(HOTKEYS).forEach((hotkey) => {
      if (isHotkey(hotkey, event) && hotkey in HOTKEYS) {
        HOTKEYS[hotkey]?.(editor, event)
      }
    })
  }
