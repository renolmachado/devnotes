import { handleElementHotKeys } from './handleElementsHotKeys'
import { handleEnter } from './handleEnter'
import { handleLeafHotKeys } from './handleLeafHotKeys'
import { handleShiftEnter } from './handleShiftEnter'

interface HotKey {
  [key: string]: typeof handleEnter
}

export const LEAF_HOTKEYS: HotKey = {
  'mod+b': handleLeafHotKeys('bold'),
  'mod+i': handleLeafHotKeys('italic'),
  'mod+u': handleLeafHotKeys('underline'),
  'mod+`': handleLeafHotKeys('code'),
  'mod+s': handleLeafHotKeys('lineThrough'),
  'alt+c': handleElementHotKeys('check-list-item'),
  'alt+b': handleElementHotKeys('bulleted-list'),
  'mod+q': handleElementHotKeys('block-quote'),
}

export const HOTKEYS: HotKey = {
  ...LEAF_HOTKEYS,
  'shift+enter': handleShiftEnter,
  enter: handleEnter,
}
