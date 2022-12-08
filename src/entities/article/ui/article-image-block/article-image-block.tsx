import { memo } from 'react'

import { classNames } from '@/shared/lib/class-names'
import { Text, TextAlign } from '@/shared/ui/text'

import { ArticleImageBlockTypes } from '../../model/types/article'

import cls from './article-image-block.module.scss'

interface ArticleImageBlockProps {
  className?: string
  block: ArticleImageBlockTypes
}

export const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
  const { className, block } = props
  return (
    <div className={classNames(cls.articleImageBlock, {}, [className])}>
      <img src={block.src} className={cls.img} alt={block.title}/>
      {block.title && <Text text={block.title} align={TextAlign.CENTER}/>}
    </div>
  )
})
