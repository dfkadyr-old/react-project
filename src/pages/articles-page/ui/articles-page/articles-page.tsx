import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/class-names'

import cls from './articles-page.module.scss'

interface ArticlesPageProps {
  className?: string
}

export const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {t('Articles Page')}
    </div>
  )
})
