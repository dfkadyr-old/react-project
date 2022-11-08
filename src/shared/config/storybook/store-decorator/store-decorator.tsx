import { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from 'app/providers/store-provider'
import { articleDetailsReducer } from 'entities/article'
import { profileReducer } from 'entities/profile'
import { addCommentFormReducer } from 'features/add-comment-form/model/slices/add-comment-form-slice'
import { loginReducer } from 'features/auth-by-username/model/slice/login-slice'
import { articleDetailsCommentsReducer } from 'pages/article-details-page/model/slices/article-details-comments-slice'
import { ReducersList } from 'shared/lib/components/dynamic-module-loader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
  </StoreProvider>
)
