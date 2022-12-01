import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Country } from 'entities/country'
import { Currency } from 'entities/currency'
import { ProfileCard } from 'entities/profile'
import { classNames } from 'shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { useInitialEffect } from 'shared/lib/hooks/use-initial-effect'
import { VStack } from 'shared/ui/stack'
import { Text, TextTheme } from 'shared/ui/text'

import { getProfileError } from '../../model/selectors/get-profile-error'
import { getProfileForm } from '../../model/selectors/get-profile-form'
import { getProfileIsLoading } from '../../model/selectors/get-profile-is-loading'
import { getProfileReadonly } from '../../model/selectors/get-profile-readonly'
import { getProfileValidateErrors } from '../../model/selectors/get-profile-validate-errors'
import { fetchProfileData } from '../../model/services/fetch-profile-data'
import { profileActions, profileReducer } from '../../model/slice/profile-slice'
import { ValidateProfileErrors } from '../../model/types/editable-profile-card-schema'
import { EditableProfileCardHeader } from '../editable-profile-card-header'

interface EditableProfileCardProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  profile: profileReducer
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props
  const { t } = useTranslation()

  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const isReadonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorTranslates = {
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Incorrect username or password'),
    [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileErrors.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileErrors.NO_DATA]: t('Data is empty'),
    [ValidateProfileErrors.SERVER_ERROR]: t('Server Error')
  }

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ first: value }))
  }, [dispatch])

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }))
  }, [dispatch])

  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
  }, [dispatch])

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }))
  }, [dispatch])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  return (
    <DynamicModuleLoader reducers={reducers}>
        <VStack gap={'8'} max className={classNames('', {}, [className])}>
          <EditableProfileCardHeader />
          {validateErrors?.length && validateErrors.map(error => (
            <Text
              dataTestId={'EditableProfileCard.Error'}
              key={error}
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[error]}
            />
          ))}
          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            isReadonly={isReadonly}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </VStack>
    </DynamicModuleLoader>
  )
})
