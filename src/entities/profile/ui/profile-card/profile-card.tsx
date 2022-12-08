import { useTranslation } from 'react-i18next'

import { Country, CountrySelect } from '@/entities/country'
import { Currency, CurrencySelect } from '@/entities/currency'
import { classNames, Mods } from '@/shared/lib/class-names'
import { Avatar } from '@/shared/ui/avatar'
import { Input } from '@/shared/ui/input'
import { Spinner } from '@/shared/ui/spinner'
import { HStack, VStack } from '@/shared/ui/stack'
import { Text, TextTheme, TextAlign } from '@/shared/ui/text'

import { Profile } from '../../model/types/profile'

import cls from './profile-card.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  isReadonly?: boolean
  onChangeFirstname: (value: string) => void
  onChangeLastname: (value: string) => void
  onChangeCity: (value: string) => void
  onChangeAge: (value: string) => void
  onChangeUsername: (value: string) => void
  onChangeAvatar: (value: string) => void
  onChangeCurrency: (currency: Currency) => void
  onChangeCountry: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    isReadonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props
  const { t } = useTranslation()

  const mods: Mods = {
    [cls.editing]: !isReadonly
  }

  if (isLoading) {
    return (
      <HStack
        justify={'center'}
        align={'center'}
        className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}
        max
      >
        <Spinner />
      </HStack>
    )
  }

  if (error) {
    return (
      <HStack justify={'center'} align={'center'} className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text theme={TextTheme.ERROR} title={t(error)} text={t('Refresh page')} align={TextAlign.CENTER} />
      </HStack>
    )
  }

  return (
    <VStack gap='16' max className={classNames(cls.profileCard, mods, [className])}>
        {data?.avatar && (
          <HStack justify={'center'} max align={'center'}>
            <Avatar src={data?.avatar} alt="avatar"/>
          </HStack>
        )}
        <Input
          value={data?.first}
          placeholder={t('Enter firstname')}
          className={cls.input}
          readonly={isReadonly}
          onChange={onChangeFirstname}
          data-testid={'ProfileCard.firstname'}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Enter lastname')}
          className={cls.input}
          readonly={isReadonly}
          onChange={onChangeLastname}
          data-testid={'ProfileCard.lastname'}
        />
        <Input
          value={data?.age}
          placeholder={t('Enter age')}
          className={cls.input}
          readonly={isReadonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t('Enter city')}
          className={cls.input}
          readonly={isReadonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t('Enter username')}
          className={cls.input}
          readonly={isReadonly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Enter avatar')}
          className={cls.input}
          readonly={isReadonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          isReadonly={isReadonly}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          isReadonly={isReadonly}
          onChange={onChangeCountry}
        />
    </VStack>
  )
}
