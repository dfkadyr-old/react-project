import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { classNames, Mods } from 'shared/lib/class-names'

import cls from './flex.module.scss'

export type FlexJustify = 'start' | 'center' | 'end' | 'spaceAround' | 'spaceBetween'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  spaceAround: cls.justifySpaceAround,
  spaceBetween: cls.justifySpaceBetween
}

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32
}

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  gap?: FlexGap
  max?: boolean
}

export const Flex = (props: FlexProps) => {
  const { className, children, justify = 'start', align = 'start', direction = 'row', gap, max } = props

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap]
  ]

  const mods: Mods = {
    [cls.max]: max
  }

  return (
    <div className={classNames(cls.flex, mods, classes)}>
      {children}
    </div>
  )
}
