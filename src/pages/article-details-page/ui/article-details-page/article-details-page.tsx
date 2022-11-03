import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ArticleDetails } from 'entities/article'
import { classNames } from 'shared/lib/class-names'

import cls from './article-details-page.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Article not found')}
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  )
})
