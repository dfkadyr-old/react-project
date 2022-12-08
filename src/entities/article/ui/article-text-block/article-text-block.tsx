import { memo } from 'react'

import { classNames } from '@/shared/lib/class-names'
import { Text } from '@/shared/ui/text'

import { ArticleTextBlockTypes } from '../../model/types/article'

import cls from './article-text-block.module.scss'

interface ArticleTextBlockProps {
  className?: string
  block: ArticleTextBlockTypes
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
  const { className, block } = props
  return (
    <div className={classNames(cls.articleTextBlock, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cls.title} />
      )}
      {block.paragraphs.map((paragraph) =>
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />)
      }
    </div>
  )
})
