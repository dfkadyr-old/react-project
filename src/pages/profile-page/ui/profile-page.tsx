import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { profileReducer } from 'entities/profile'
import { classNames } from 'shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        {t('Profile page')}
      </div>
    </DynamicModuleLoader>
  )
})
