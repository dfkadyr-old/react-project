import { memo } from 'react'

import { ArticleView } from '@/entities/article'
import ListIcon from '@/shared/assets/icons/list-24-24.svg'
import CardIcon from '@/shared/assets/icons/tiled-24-24.svg'
import { classNames } from '@/shared/lib/class-names'
import { Button, ButtonTheme } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'

import cls from './article-view-selector.module.scss'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.CARD,
    icon: CardIcon
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon
  }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props

  const onClickNewValue = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames('', {}, [className])}>
      {
        viewTypes.map(viewType => (
          <Button
            key={viewType.view}
            theme={ButtonTheme.CLEAR}
            onClick={onClickNewValue(viewType.view)}
          >
            <Icon Svg={viewType.icon} className={classNames('', { [cls.notSelected]: viewType.view !== view })} />
          </Button>
        ))
      }
    </div>
  )
})
