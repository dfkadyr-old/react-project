import { memo } from 'react'

import { classNames } from 'shared/lib/class-names'
import { Card, CardTheme } from 'shared/ui/card'
import { Text } from 'shared/ui/text'

import { Notification } from '../../model/types/notification'

import cls from './notification-item.module.scss'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.notificationItem, {}, [className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  )

  if (item.href) {
    return (
      <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
        {content}
      </a>
    )
  }

  return content
})
