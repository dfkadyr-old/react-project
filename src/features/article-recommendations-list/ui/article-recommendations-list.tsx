import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleList } from '@/entities/article'
import { classNames } from '@/shared/lib/class-names'
import { VStack } from '@/shared/ui/stack'
import { Text, TextSize } from '@/shared/ui/text'

import { useArticlesRecommendationsList } from '../api/article-recommendations-api'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { data: articles, isLoading, error } = useArticlesRecommendationsList(3)

  if (isLoading || error || !articles) {
    return null
  }

  return (
    <VStack data-testid="ArticleRecommendationsList" gap="8" className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Recommendation')} />
      <ArticleList articles={articles} isLoading={isLoading} target="_blank" />
    </VStack>
  )
})
