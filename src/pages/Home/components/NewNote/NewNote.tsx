import { ChangeEventHandler } from 'react'
import {
  NewNoteContainer,
  InputContainer,
  NewNoteInput,
  PlusIcon,
} from './NewNote.styles'

interface NewNoteProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  addNewNote: () => Promise<void>
  newNoteName: string
}

const NewNote = ({ newNoteName, onChange, addNewNote }: NewNoteProps) => {
  return (
    <NewNoteContainer>
      Create a new note
      <InputContainer>
        <NewNoteInput
          type="text"
          value={newNoteName}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addNewNote()
            }
          }}
        />
        <PlusIcon onClick={addNewNote} />
      </InputContainer>
    </NewNoteContainer>
  )
}

export default NewNote
