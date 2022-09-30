import { CSSProperties } from 'react'
import { RenderLeaf as LeafProps } from '../../types'
import Code from '../Code/Code'

export const Leaf = ({ attributes, children, leaf }: LeafProps) => {
  const style: CSSProperties = {}

  if (leaf.bold) {
    style.fontWeight = 'bold'
  }

  if (leaf.code) {
    children = <Code>{children}</Code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
    style.fontStyle = 'italic'
  }

  if (leaf.underline) {
    style.textDecoration = 'underline'
  }

  if (leaf.lineThrough) {
    style.textDecoration = 'line-through'
  }

  return (
    <span {...attributes} style={style}>
      {children}
    </span>
  )
}
