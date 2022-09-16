import { useCallback } from 'react'
import { Slate } from 'slate-react'

import { Toolbar } from './components/Toolbar/Toolbar'
import { Leaf } from './components/Leaf/Leaf'
import { Element } from './components/Element/Element'
import { Container, StyledEditable } from './TextEditor.styles'
import { useTextEditor } from './useTextEditor'
import { RenderLeaf, RenderElement } from './types'

interface Props {
  fileName: string
}

export const TextEditor = ({ fileName }: Props) => {
  const { editor, values, onChange } = useTextEditor(fileName)

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
