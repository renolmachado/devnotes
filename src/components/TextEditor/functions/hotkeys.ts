import { ElementFormat, LeafFormat } from '../types'
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

type BlockCommandsMapper = {
  // eslint-disable-next-line no-unused-vars
  [key in ElementFormat]: string
}

type LeafCommandsMapper = {
  // eslint-disable-next-line no-unused-vars
  [key in LeafFormat]: string
}

export const BLOCK_COMMANDS_HOTKEYS: Partial<BlockCommandsMapper> = {
  'check-list-item': 'alt + c',
  'bulleted-list': 'alt + b',
  'block-quote': 'mod + q',
}

export const LEAF_COMMANDS_MAPPER: Partial<LeafCommandsMapper> = {
  bold: 'mod + b',
  italic: 'mod + i',
  underline: 'mod + u',
  code: 'mod + `',
  lineThrough: 'mod + s',
}
