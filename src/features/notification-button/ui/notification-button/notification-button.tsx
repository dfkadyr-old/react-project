import { memo } from 'react'

import { NotificationList } from 'entities/notification'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { classNames } from 'shared/lib/class-names'
import { Button, ButtonTheme } from 'shared/ui/button'
import { Icon } from 'shared/ui/icon'
import { Popover } from 'shared/ui/popups'

import cls from './notification-button.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props
  return (
      <Popover
        className={classNames('', {}, [className])}
        direction={'bottom left'}
        trigger={(
          <Button theme={ButtonTheme.CLEAR}>
            <Icon inverted Svg={NotificationIcon} />
          </Button>
        )}>
        <NotificationList className={cls.notifications} />
      </Popover>
  )
})
