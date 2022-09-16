import styled, { css } from 'styled-components'

export const Button = styled.button<{ isActive: boolean }>`
  font-style: normal;
  font-size: 1.5rem;
  padding: 0.4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: fff;

  ${(props) =>
    props.isActive &&
    css`
      color: var(--primary-font-color);
      transform: scale(1.1);
    `}

  &:hover {
    transform: scale(1.1);
    color: var(--color-primary-1);
  }
`
