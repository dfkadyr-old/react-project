import { memo } from 'react'

import { classNames } from '@/shared/lib/class-names'
import { Code } from '@/shared/ui/code'

import { ArticleCodeBlockTypes } from '../../model/types/article'

import cls from './article-code-block.module.scss'

interface ArticleCodeBlockProps {
  className?: string
  block: ArticleCodeBlockTypes
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
  const { className, block } = props
  return (
    <div className={classNames(cls.articleCodeBlock, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
})
