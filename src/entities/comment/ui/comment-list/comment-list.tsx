import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/class-names'
import { Text } from 'shared/ui/text'

import { CommentProps } from '../../model/types/comment'
import { CommentCard } from '../comment-card'

import cls from './comment-list.module.scss'

interface CommentListProps {
  className?: string
  comments?: CommentProps[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props
  const { t } = useTranslation()
  return (
    <div className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map(comment => (
          <CommentCard key={comment.id} className={cls.commentCard} comment={comment} isLoading={isLoading} />
        ))
        : <Text text={t('Comments not found')} />}
    </div>
  )
})
