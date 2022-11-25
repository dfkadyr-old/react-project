import { memo } from 'react'

import { RoutePath } from 'shared/config/route-config'
import { classNames } from 'shared/lib/class-names'
import { AppLink } from 'shared/ui/app-link'
import { Avatar } from 'shared/ui/avatar'
import { Skeleton } from 'shared/ui/skeleton'
import { VStack } from 'shared/ui/stack'
import { Text } from 'shared/ui/text'

import { CommentProps } from '../../model/types/comment'

import cls from './comment-card.module.scss'

interface CommentCardProps {
  className?: string
  comment?: CommentProps
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <VStack gap={'8'} max className={classNames(cls.commentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border={'50%'} />
          <Skeleton height={16} width={100} className={cls.username} />
        </div>
        <Skeleton className={cls.text} width={'100%'} height={50} />
      </VStack>
    )
  }

  if (!comment) return null

  return (
    <VStack gap={'8'} max className={classNames(cls.commentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        {comment.user.avatar ? <Avatar src={comment.user.avatar} size={30} /> : null}
        <Text className={cls.username} title={comment.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </VStack>
  )
})
