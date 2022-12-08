import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/class-names'
import { VStack } from '@/shared/ui/stack'
import { Text } from '@/shared/ui/text'

import { CommentProps } from '../../model/types/comment'
import { CommentCard } from '../comment-card'

interface CommentListProps {
  className?: string
  comments?: CommentProps[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <VStack gap={'16'} max className={classNames('', {}, [className])}>
        <CommentCard isLoading/>
        <CommentCard isLoading/>
        <CommentCard isLoading/>
      </VStack>
    )
  }

  return (
    <VStack gap={'16'} max className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />
        ))
        : <Text text={t('Comments not found')} />}
    </VStack>
  )
})
