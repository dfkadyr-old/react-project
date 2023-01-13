import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { classNames } from '@/shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch'
import { Avatar } from '@/shared/ui/avatar'
import { Icon } from '@/shared/ui/icon'
import { Skeleton } from '@/shared/ui/skeleton'
import { HStack, VStack } from '@/shared/ui/stack'
import { Text, TextAlign, TextSize } from '@/shared/ui/text'

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/article-details'
import { fetchArticleById } from '../../model/services/fetch-article-by-id'
import { articleDetailsReducer } from '../../model/slice/article-details-slice'
import { ArticleBlockType, ArticleBlockTypes } from '../../model/types/article'
import { ArticleCodeBlock } from '../article-code-block'
import { ArticleImageBlock } from '../article-image-block'
import { ArticleTextBlock } from '../article-text-block'

import cls from './article-details.module.scss'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const article = useSelector(getArticleDetailsData)

  const renderBlock = useCallback((block: ArticleBlockTypes) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} className={cls.block} block={block} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} className={cls.block} block={block} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlock key={block.id} className={cls.block} block={block} />
      default:
        return null
    }
  }, [])

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
      </>
    )
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={t('Error to get article by id')} />
  } else {
    content = (
      <>
        {article?.img && (
          <HStack justify={'center'} align={'center'} max className={cls.avatarWrapper}>
            <Avatar size={200} src={article.img} className={cls.avatar} />
          </HStack>
        )}
        <VStack gap={'4'} max data-testid="ArticleDetails.Info">
          <Text title={article?.title} text={article?.subtitle} className={cls.title} size={TextSize.L} />
          <HStack gap={'8'}>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack gap={'8'}>
            <Icon Svg={CalendarIcon} className={cls.icon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap={'16'} max className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})
