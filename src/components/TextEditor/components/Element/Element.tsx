import { RenderElement } from '../../types'

export const Element = ({ attributes, children, element }: RenderElement) => {
  const style = { ...element.style }
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={{ ...style, paddingLeft: '1rem' }} {...attributes}>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={{ ...style, paddingLeft: '1rem' }} {...attributes}>
          {children}
        </ol>
      )
    case 'paragraph':
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
    default:
      return (
        <div style={style} {...attributes}>
          {children}
        </div>
      )
  }
}
