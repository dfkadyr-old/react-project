import { memo } from 'react'

import { classNames } from '@/shared/lib/class-names'

import cls from './overlay.module.scss'

interface OverlayProps {
  className?: string
  onClick?: () => void
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props
  return <div onClick={onClick} className={classNames(cls.overlay, {}, [className])} />
})
