// eslint-disable-next-line import/named
import { Descendant as DescendantType } from 'slate'
import { Element } from './element'
import { Leaf } from './leaf'

export type Descendant = DescendantType & {
  children?: (Descendant & Leaf)[]
} & Partial<Element>
