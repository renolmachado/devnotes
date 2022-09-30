import { ReactNode } from 'react'
import { Transforms, Element as SlateElement } from 'slate'
import { useSlateStatic, useReadOnly, ReactEditor } from 'slate-react'
import { CheckboxContainer, Input, Text } from './Checkbox.styles'

interface ExtendedElement extends SlateElement {
  checked?: boolean
}

interface Props {
  attributes: any
  children: ReactNode
  element: ExtendedElement
}

const CheckListItemElement = ({ attributes, children, element }: Props) => {
  const editor = useSlateStatic() as ReactEditor
  const readOnly = useReadOnly()
  const { checked } = element

  return (
    <CheckboxContainer {...attributes}>
      <Input
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          const path = ReactEditor.findPath(editor, element)
          const newProperties: Partial<ExtendedElement> = {
            checked: event.target.checked,
          }
          Transforms.setNodes(editor, newProperties, { at: path })
        }}
      />
      <Text
        contentEditable={!readOnly}
        suppressContentEditableWarning
        isChecked={!!checked}
      >
        {children}
      </Text>
    </CheckboxContainer>
  )
}

export default CheckListItemElement
