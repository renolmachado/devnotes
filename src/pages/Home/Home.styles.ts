import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Note = styled.div`
  display: flex;
  width: 10rem;
  height: 10rem;
  border-radius: 2rem;
  padding: 1.8rem;
  border: 0.5rem solid;
  word-break: break-all;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }

  :hover {
    filter: brightness(0.9);
  }
`
