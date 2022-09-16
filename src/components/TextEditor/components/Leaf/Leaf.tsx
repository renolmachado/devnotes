import { CSSProperties } from 'react'
import { RenderLeaf as LeafProps } from '../../types'

export const Leaf = ({ attributes, children, leaf }: LeafProps) => {
  const style: CSSProperties = {}

  if (leaf.bold) {
    // children = <strong>{children}</strong>
    style.fontWeight = 'bold'
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
    style.fontStyle = 'italic'
  }

  if (leaf.underline) {
    // children = <u>{children}</u>
    style.textDecoration = 'underline'
  }

  if (leaf.lineThrough) {
    // children = (
    //   <span style={{ textDecoration: 'line-through' }}>{children}</span>
    // )
    style.textDecoration = 'line-through'
  }

  return (
    <span {...attributes} style={style}>
      {children}
    </span>
  )
}
