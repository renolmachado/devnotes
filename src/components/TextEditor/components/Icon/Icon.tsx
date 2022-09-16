import {
  AiOutlineBold,
  AiOutlineCode,
  AiOutlineItalic,
  AiOutlineUnderline,
  AiOutlineStrikethrough,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
} from 'react-icons/ai'

import { ElementFormat, LeafFormat } from '../../types'

interface Props {
  format: LeafFormat | ElementFormat
}

export const Icon = ({ format }: Pick<Props, 'format'>) => {
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

  if (format === 'lineThrough') {
    return <AiOutlineStrikethrough />
  }

  if (format === 'bulleted-list') {
    return <AiOutlineUnorderedList />
  }

  if (format === 'numbered-list') {
    return <AiOutlineOrderedList />
  }

  return null
}
