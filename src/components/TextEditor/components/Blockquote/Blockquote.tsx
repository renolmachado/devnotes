import React, { CSSProperties, ReactNode } from 'react'
import { Attributes } from '../../types'
import { StyledBlockquote } from './Blockquote.styles'

interface BlockquoteProps {
  style: CSSProperties
  attributes: Attributes
  children: ReactNode
}

const Blockquote: React.FC<BlockquoteProps> = ({
  style,
  attributes,
  children,
}) => {
  return (
    <StyledBlockquote style={style} {...attributes}>
      {children}
    </StyledBlockquote>
  )
}

export default Blockquote
