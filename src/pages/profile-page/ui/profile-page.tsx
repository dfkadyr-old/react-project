import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { EditableProfileCard } from 'features/editable-profile-card'
import { classNames } from 'shared/lib/class-names'
import { VStack } from 'shared/ui/stack'
import { Text } from 'shared/ui/text'
import { Page } from 'widgets/page'

interface ProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <Text text={t('Profile not found')} />
  }

  return (
      <Page className={classNames('', {}, [className])}>
        <VStack gap='16' max>
          <EditableProfileCard id={id} />
        </VStack>
      </Page>
  )
})
