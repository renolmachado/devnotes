import { useCallback } from 'react'
import { Slate } from 'slate-react'

import { Toolbar } from './components/Toolbar/Toolbar'
import { Leaf } from './components/Leaf/Leaf'
import { Element } from './components/Element/Element'
import { Container, StyledEditable } from './TextEditor.styles'
import { useTextEditor } from './useTextEditor'
import { RenderLeaf, RenderElement } from './types'

export const TextEditor = () => {
  const { editor, values, onChange } = useTextEditor()

  const renderLeaf = useCallback((props: RenderLeaf) => <Leaf {...props} />, [])

  const renderElement = useCallback((props: RenderElement) => {
    return <Element {...props} />
  }, [])

  return values ? (
    <Slate editor={editor} value={values} onChange={onChange as any}>
      <Container>
        <StyledEditable renderLeaf={renderLeaf} renderElement={renderElement} />
        <Toolbar />
      </Container>
    </Slate>
  ) : null
}
