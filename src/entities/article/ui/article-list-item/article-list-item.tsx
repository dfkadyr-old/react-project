import { HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { RoutePath } from '@/shared/const/router'
import { classNames } from '@/shared/lib/class-names'
import { AppLink } from '@/shared/ui/app-link'
import { Avatar } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Icon } from '@/shared/ui/icon'
import { Text } from '@/shared/ui/text'

import { ArticleView } from '../../model/consts'
import { Article, ArticleBlockType, ArticleTextBlockTypes } from '../../model/types/article'
import { ArticleTextBlock } from '../article-text-block'

import cls from './article-list-item.module.scss'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props
  const { t } = useTranslation()

  const types = <Text text={article.type.join(', ')} className={cls.types} />
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlockTypes
    return (
      <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && <ArticleTextBlock block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={RoutePath.article_details + article.id}
            >
              <Button>
                {t('Read more...')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} className={cls.img} alt={article.title}/>
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  )
})
