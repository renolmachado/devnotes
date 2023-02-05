import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 1.2rem;
  justify-content: center;
`

export const Note = styled.div`
  display: flex;
  border-radius: 2rem;
  padding: 0.8rem;
  border: 0.3rem solid;
  word-break: break-all;
  cursor: pointer;

  :hover {
    filter: brightness(0.7);
  }
`

export const Title = styled.h1`
  text-align: center;
  width: 100%;
`
