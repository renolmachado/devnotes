import { useCallback, useState } from 'react'
import { createEditor } from 'slate'
import { withReact, Slate, Editable } from 'slate-react'
import { Leaf } from './components/leaf/Leaf'
import { Element } from './components/element/Element'
import { Descendant, RenderLeaf, RenderElement } from './types'

const initialValue: Descendant[] = [
  // {
  //   type: 'paragraph',
  //   children: [{ text: 'This is editable ' }],
  //   style: { textAlign: 'left' },
  // },
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
    console.log(props, 'Element')
    return <Element {...props} />
  }, [])

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        style={{ border: '1px solid' }}
        renderLeaf={renderLeaf}
        renderElement={renderElement}
      />
    </Slate>
  )
}
