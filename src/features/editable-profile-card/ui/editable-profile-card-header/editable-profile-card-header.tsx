import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/user'
import { classNames } from '@/shared/lib/class-names'
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch'
import { Button, ButtonTheme } from '@/shared/ui/button'
import { HStack } from '@/shared/ui/stack'
import { Text } from '@/shared/ui/text'

import { getProfileData } from '../../model/selectors/get-profile-data'
import { getProfileReadonly } from '../../model/selectors/get-profile-readonly'
import { updateProfileData } from '../../model/services/update-profile-data'
import { profileActions } from '../../model/slice/profile-slice'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
  const { className } = props
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const dispatch = useAppDispatch()
  const isReadonly = useSelector(getProfileReadonly)
  const isCanEdit = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <HStack max justify={'spaceBetween'} className={classNames('', {}, [className])}>
      <Text title={t('Profile')} />
      {isCanEdit && (
        <>
          {isReadonly ? (
            <Button data-testid={'EditableProfileCardHeader.EditBtn'} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
              {t('Edit profile')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button
                data-testid={'EditableProfileCardHeader.CancelBtn'}
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCancelEdit}
              >
                {t('Cancel')}
              </Button>
              <Button data-testid={'EditableProfileCardHeader.SaveBtn'} theme={ButtonTheme.OUTLINE} onClick={onSave}>
                {t('Save')}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  )
})
