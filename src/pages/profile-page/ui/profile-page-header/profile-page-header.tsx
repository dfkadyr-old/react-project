import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/profile'
import { getUserAuthData } from 'entities/user'
import { classNames } from 'shared/lib/class-names'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { Button, ButtonTheme } from 'shared/ui/button'
import { HStack } from 'shared/ui/stack'
import { Text } from 'shared/ui/text'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
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
          {
            isReadonly
              ? (
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onEdit}
                >
                  {t('Edit profile')}
                </Button>
                )
              : (
                <HStack gap="8">
                  <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCancelEdit}
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                  >
                    {t('Save') }
                  </Button>
                </HStack>
                )
          }
        </>
      )}
    </HStack>
  )
}
