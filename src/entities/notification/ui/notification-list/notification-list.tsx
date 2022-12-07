import { memo } from 'react'

import { classNames } from 'shared/lib/class-names'
import { Skeleton } from 'shared/ui/skeleton'
import { VStack } from 'shared/ui/stack'

import { useNotifications } from '../../api/notification-api'
import { NotificationItem } from '../notification-item'

import cls from './notification-list.module.scss'

interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000
  })

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames(cls.notificationList, {}, [className])}
      >
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    )
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.notificationList, {}, [className])}
    >
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  )
})
