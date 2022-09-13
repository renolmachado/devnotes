import styled from 'styled-components'
import { Editable } from 'slate-react'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const StyledEditable = styled(Editable)`
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  max-height: calc(100% - 3rem - 1rem - 1rem);
  min-height: calc(100% - 3rem - 1rem - 1rem);
  overflow-y: auto;
`
