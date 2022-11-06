import { CSSProperties, useMemo } from 'react'

import { classNames } from 'shared/lib/class-names'

import cls from './avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, size = 100, alt } = props

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size
    }
  }, [size])

  return (
    <img src={src} style={styles} className={classNames(cls.avatar, {}, [className])} alt={alt} />
  )
}
