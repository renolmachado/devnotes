import { Editor, Element as SlateElement, Transforms } from 'slate'
import { LeafFormat, Leaf, ElementFormat } from '../../types'

export const LIST_TYPES = ['numbered-list', 'bulleted-list']
export const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

export const isMarkActive = (editor: Editor, format: LeafFormat) => {
  const marks = Editor.marks(editor) as Leaf
  return marks ? marks[format] === true : false
}

export const toggleMark = (editor: Editor, format: LeafFormat) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

export const isBlockActive = (
  editor: Editor,
  format: ElementFormat,
  blockType = 'type'
) => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (node) =>
        !Editor.isEditor(node) &&
        SlateElement.isElement(node) &&
        (node as any)[blockType] === format,
    })
  )

  return !!match
}

export const toggleBlock = (editor: Editor, format: ElementFormat) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
  )
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes((n as any).type) && // TODO fix type any
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties: Partial<SlateElement>
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    } as any // TODO fix type any
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    } as any // TODO fix type any
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}
