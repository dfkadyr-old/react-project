import { memo } from 'react'

import { classNames } from '@/shared/lib/class-names'
import { Spinner } from '@/shared/ui/spinner'

import cls from './page-loader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Spinner />
    </div>
  )
})
