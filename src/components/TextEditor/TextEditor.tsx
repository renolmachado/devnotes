import { useCallback, useState } from 'react'
import { createEditor } from 'slate'
import { withReact, Slate } from 'slate-react'

import { Leaf } from './components/Leaf/Leaf'
import { Element } from './components/Element/Element'
import { Descendant, RenderLeaf, RenderElement } from './types'
import { Toolbar } from './components/Toolbar/Toolbar'
import { Container, StyledEditable } from './TextEditor.styles'

const initialValue: Descendant[] = [
  {
    // type: '',
    children: [{ text: 'This is editable ' }],
    style: { textAlign: 'left' },
  },
  // {
  //   type: 'block-quote',
  //   children: [{ text: 'A line of text in a paragraph.', code: true }],
  // },
  // {
  //   type: 'paragraph',
  //   children: [{ text: 'A line of text in a paragraph.', italic: true }],
  // },
  // {
  //   type: 'paragraph',
  //   children: [{ text: 'A line of text in a paragraph.', underline: true }],
  // },
  // {
  //   type: 'paragraph',
  //   children: [{ text: 'A line of text in a paragraph.', bold: true }],
  // },
]

export const TextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const renderLeaf = useCallback((props: RenderLeaf) => <Leaf {...props} />, [])
  const renderElement = useCallback((props: RenderElement) => {
    return <Element {...props} />
  }, [])

  return (
    <Slate editor={editor} value={initialValue}>
      <Container>
        <StyledEditable renderLeaf={renderLeaf} renderElement={renderElement} />
        <Toolbar />
      </Container>
    </Slate>
  )
}
