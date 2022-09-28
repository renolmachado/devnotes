import styled from 'styled-components'

export const Text = styled.span<{
  isChecked: boolean
}>`
  display: flex;
  line-height: 1.2;
  min-width: 0.1rem;
  display: block;

  ${({ isChecked }) =>
    isChecked &&
    `
    text-decoration: line-through;
  `}
`

export const Input = styled.input.attrs({ type: 'checkbox' })`
  display: flex;
  cursor: pointer;
  accent-color: var(--color-primary-1);
  border: none;
  margin-top: initial;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`
