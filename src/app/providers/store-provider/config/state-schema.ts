import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'

import { ArticleDetailsSchema } from '@/entities/article'
import { CounterSchema } from '@/entities/counter'
import { UserSchema } from '@/entities/user'
import { AddCommentFormSchema } from '@/features/add-comment-form'
import { LoginSchema } from '@/features/auth-by-username'
import { ProfileSchema } from '@/features/editable-profile-card'
import { ArticleDetailsPageSchema } from '@/pages/article-details-page'
import { ArticlesPageSchema } from '@/pages/articles-page'
import { rtkApi } from '@/shared/api'
import { PageSchema } from '@/widgets/page'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  page: PageSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManagerProps {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManagerProps
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
