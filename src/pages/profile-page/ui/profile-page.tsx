import { memo } from 'react'
import { useParams } from 'react-router-dom'

import { EditableProfileCard } from 'features/editable-profile-card'
import { classNames } from 'shared/lib/class-names'
import { VStack } from 'shared/ui/stack'
import { Page } from 'widgets/page'

interface ProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()

  return (
      <Page className={classNames('', {}, [className])}>
        <VStack gap='16' max>
          <EditableProfileCard id={id!} />
        </VStack>
      </Page>
  )
})
