import { CSSProperties, useMemo } from 'react'

import { classNames } from '@/shared/lib/class-names'

import UserIcon from '../../assets/icons/avatar.svg'
import { AppImage } from '../app-image'
import { Icon } from '../icon'
import { Skeleton } from '../skeleton'

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

  const fallback = <Skeleton width={size} height={size} border="50%" />
  const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
      alt={alt}
    />
  )
}
