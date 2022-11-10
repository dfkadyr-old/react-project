import { memo } from 'react'

import { ArticleListItemSkeleton } from 'entities/article/ui/article-list-item/article-list-item-skeleton'
import { classNames } from 'shared/lib/class-names'

import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../article-list-item'

import cls from './article-list.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.CARD ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ))
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, view = ArticleView.LIST, isLoading } = props

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} className={cls.card} key={article.id}/>
  }

  if (isLoading) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    )
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  )
})
