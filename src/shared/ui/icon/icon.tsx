import React, { memo } from 'react'

import { classNames } from '@/shared/lib/class-names'

import cls from './icon.module.scss'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted = false, ...otherProps } = props
  return <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])} {...otherProps} />
})
