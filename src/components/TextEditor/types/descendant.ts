import type { Descendant as DescendantType } from 'slate'
import { Element } from './element'
import { Leaf } from './leaf'

export type Descendant = DescendantType & {
  children?: (Descendant & Leaf)[]
} & Partial<Element>
