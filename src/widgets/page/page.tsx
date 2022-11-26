import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { StateSchema } from 'app/providers/store-provider'
import { classNames } from 'shared/lib/class-names'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { useInfiniteScroll } from 'shared/lib/hooks/use-infinite-scroll'
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect'
import { useThrottle } from 'shared/lib/hooks/use-throttle/use-throttle'

import { getPageScrollByPath } from './model/selectors/page'
import { pageActions } from './model/slices/page-slice'
import cls from './page.module.scss'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getPageScrollByPath(state, pathname))

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(pageActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop
    }))
  }, 500)

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  return (
    <main
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  )
})
