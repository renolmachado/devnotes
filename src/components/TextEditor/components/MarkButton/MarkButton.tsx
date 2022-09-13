import { Editor } from 'slate'
import { useSlate } from 'slate-react'
import {
  AiOutlineBold,
  AiOutlineCode,
  AiOutlineItalic,
  AiOutlineUnderline,
} from 'react-icons/ai'
import { Format, Leaf } from '../../types'

const isMarkActive = (editor: Editor, format: Format) => {
  const marks = Editor.marks(editor) as Leaf
  return marks ? marks[format] === true : false
}

const toggleMark = (editor: Editor, format: Format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

interface Props {
  format: Format
}

const Icon = ({ format }: Props) => {
  if (format === 'bold') {
    return <AiOutlineBold />
  }

  if (format === 'italic') {
    return <AiOutlineItalic />
  }

  if (format === 'underline') {
    return <AiOutlineUnderline />
  }

  if (format === 'code') {
    return <AiOutlineCode />
  }

  return null
}

export const MarkButton = ({ format }: Props) => {
  const editor = useSlate()
  return (
    <button
      type="button"
      // active={isMarkActive(editor, format)}
      onMouseDown={(event: any) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon format={format} />
    </button>
  )
}
