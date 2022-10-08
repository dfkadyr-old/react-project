import { userEvent } from '@storybook/testing-library'
import { screen } from '@testing-library/react'

import { componentRender } from 'shared/lib/tests/component-render'

import { Counter } from './counter'

describe('Counter', () => {
  test('render test', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
  })

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
  })
})
