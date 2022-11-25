import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from 'shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import { HStack } from 'shared/ui/stack'

import {
  getAddCommentFormIsLoading,
  getAddCommentFormText
} from '../../model/selectors/add-comment-form-selectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/add-comment-form-slice'

import cls from './add-comment-form.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

export const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)
  const isLoading = useSelector(getAddCommentFormIsLoading)

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        justify={'spaceBetween'}
        align={'center'}
        max gap={'8'}
        className={classNames(cls.addCommentForm, {}, [className])}
      >
        <Input
          className={cls.input}
          value={text}
          placeholder={t('Enter comment text')}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler} disabled={isLoading}>{t('Add')}</Button>
      </HStack>
    </DynamicModuleLoader>
  )
})
