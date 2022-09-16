import React from 'react'
import { Element as ElementToExtend } from 'slate'

export type ElementFormat = ElementTypes

export type ElementTypes =
  | 'block-quote'
  | 'bulleted-list'
  | 'heading-one'
  | 'heading-two'
  | 'list-item'
  | 'numbered-list'
  | 'paragraph'

export type Element = ElementToExtend & { type?: ElementTypes } & {
  style?: React.CSSProperties
}

export interface RenderElement {
  children: React.ReactNode
  element: Element
  attributes: {
    'data-slate-node': 'element'
    'data-slate-inline'?: true
    'data-slate-void'?: true
    dir?: 'rtl'
    ref: React.RefObject<any>
  }
}
