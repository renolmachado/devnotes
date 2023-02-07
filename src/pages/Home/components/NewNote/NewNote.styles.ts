import styled from 'styled-components'
import { BsPlus } from 'react-icons/bs'

import { Note } from '../../Home.styles'

export const NewNoteContainer = styled(Note)`
  flex-direction: column;
  line-height: 1;
  gap: 1rem;
  padding: 2rem;
`

export const NewNoteInput = styled.input`
  border-radius: 8rem;
  border: none;
  height: 2rem;
  padding: 0 1rem;
  flex-grow: 1;
`

export const PlusIcon = styled(BsPlus)`
  margin-left: 0.5rem;
  cursor: pointer;
  font-size: 2rem;

  &:hover {
    color: #00ff00;
  }
`

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`
