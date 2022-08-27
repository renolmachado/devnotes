import React, { Ref, PropsWithChildren } from 'react'
import { cx, css } from '@emotion/css'
import { BaseProps, OrNull } from '../types'

export const Button = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean
        reversed: boolean
      } & BaseProps
    >,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      ref={ref as any}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: black;
        `
      )}
    />
  )
)
