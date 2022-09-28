import {
  AiOutlineBold,
  AiOutlineCode,
  AiOutlineItalic,
  AiOutlineUnderline,
  AiOutlineStrikethrough,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
  AiOutlineCheckSquare,
} from 'react-icons/ai'
import { IoMdQuote } from 'react-icons/io'

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

  if (format === 'check-list-item') {
    return <AiOutlineCheckSquare />
  }

  if (format === 'block-quote') {
    return <IoMdQuote />
  }

  return null
}
