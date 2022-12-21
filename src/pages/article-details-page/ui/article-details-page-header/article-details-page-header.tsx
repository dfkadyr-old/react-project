import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getArticleDetailsData } from '@/entities/article'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { classNames } from '@/shared/lib/class-names'
import { Button } from '@/shared/ui/button'
import { HStack } from '@/shared/ui/stack'

import { getCanEditArticle } from '../../model/selectors/article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)
  const isCanEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id))
    }
  }, [article, navigate])

  return (
    <HStack max justify={'spaceBetween'} className={classNames('', {}, [className])}>
      <Button onClick={onBackToList}>
        {t('Go to entities')}
      </Button>
      {isCanEdit && (
        <Button onClick={onEditArticle}>
          {t('Edit')}
        </Button>)
      }
    </HStack>
  )
})
