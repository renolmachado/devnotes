import { ReactNode } from 'react'
import { StyledCode } from './Code.styles'

interface CodeProps {
  children: ReactNode
}

const Code = ({ children }: CodeProps) => {
  return <StyledCode>{children}</StyledCode>
}

export default Code
