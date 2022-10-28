import { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from 'app/providers/store-provider'
import { profileReducer } from 'entities/profile'
import { loginReducer } from 'features/auth-by-username/model/slice/login-slice'
import { ReducersList } from 'shared/lib/components/dynamic-module-loader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
  </StoreProvider>
)
