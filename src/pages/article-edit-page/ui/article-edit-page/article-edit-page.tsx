import { memo } from 'react'
import { useParams } from 'react-router-dom'

import { classNames } from 'shared/lib/class-names'
import { Page } from 'widgets/page'

interface ArticleEditPageProps {
  className?: string
}

export const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props
  const { id } = useParams()
  const isEdit = Boolean(id)

  return (
    <Page className={classNames('', {}, [className])}>
      {isEdit ? `ArticleEditPage - ${id}` : 'ArticleCreatePage'}
    </Page>
  )
})
