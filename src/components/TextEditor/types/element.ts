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
  | 'check-list-item'
  | 'block-quote'

export type Element = ElementToExtend & { type?: ElementTypes } & {
  style?: React.CSSProperties
}

export type Attributes = {
  'data-slate-node': 'element'
  'data-slate-inline'?: true
  'data-slate-void'?: true
  dir?: 'rtl'
  ref: React.RefObject<any>
}

export interface RenderElement {
  children: React.ReactNode
  element: Element
  attributes: Attributes
}
