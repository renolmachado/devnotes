import React from 'react'

export type LeafFormat = keyof Leaf

export interface Leaf {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean
  lineThrough?: boolean
}

export interface RenderLeaf {
  children?: React.ReactNode
  leaf: Leaf
  attributes: {
    'data-slate-leaf': true
  }
}
