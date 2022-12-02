import { memo } from 'react'
import { useParams } from 'react-router-dom'

import { ArticleDetails } from 'entities/article'
import { ArticleRecommendationsList } from 'features/article-recommendations-list'
import { classNames } from 'shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader'
import { VStack } from 'shared/ui/stack'
import { Page } from 'widgets/page'

import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailsPageComments } from '../article-details-page-comments'
import { ArticleDetailsPageHeader } from '../article-details-page-header'

import cls from './article-details-page.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap={'16'} max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id!} />
          <ArticleRecommendationsList />
          <ArticleDetailsPageComments id={id!} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
})
