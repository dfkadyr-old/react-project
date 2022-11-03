import isLokiRunning from '@loki/is-loki-running'
import { Story } from '@storybook/react'
import React from 'react'

const DisableAnimationsContext = React.createContext(false)

export const LokiDecorator = (story: () => Story) => (
  <DisableAnimationsContext.Provider value={isLokiRunning()}>
    {story()}
  </DisableAnimationsContext.Provider>
)
