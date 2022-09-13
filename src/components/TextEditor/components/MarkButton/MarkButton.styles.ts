import styled, { css } from 'styled-components'

const activeStyles = css`
  color: var(--color-primary-0);
  transform: scale(1.2);
`

export const Button = styled.button<{ isActive: boolean }>`
  font-style: normal;
  font-size: 1.5rem;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${(props) => props.isActive && activeStyles}

  &:hover {
    ${activeStyles}
    color: var(--color-primary-1);
  }
`
