import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/class-names'

import cls from './article-details-page.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {t('Article Details')}
    </div>
  )
})
