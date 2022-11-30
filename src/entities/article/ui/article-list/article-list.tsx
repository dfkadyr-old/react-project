import { HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/class-names'
import { Text } from 'shared/ui/text'

import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../article-list-item'
import { ArticleListItemSkeleton } from '../article-list-item/article-list-item-skeleton'

import cls from './article-list.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.CARD ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ))
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, view = ArticleView.CARD, isLoading, target } = props
  const { t } = useTranslation()

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} className={cls.card} key={article.id} target={target}/>
  }

  if (!isLoading && articles?.length === 0) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Text title={t('Article not found')} />
      </div>
    )
  }

  return (
    // TODO add virtualized logic
    <div className={classNames('', {}, [className, cls[view]])}>
      {articles?.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  )
})
