import { screen } from '@testing-library/react'

import { UserRole } from '@/entities/user'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router'
import { componentRender } from '@/shared/lib/tests/component-render'

import { AppRouter } from './app-router'

describe('app/router/AppRouter', () => {
  test('The page should render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout()
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Page not found', async () => {
    componentRender(<AppRouter />, {
      route: '/asfasfasfasf'
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Redirect an unauthorized user to the main page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1')
    })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Access to a closed page for an authorized user', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _inited: true, authData: {} }
      }
    })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('Access denied (role missing)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: {} }
      }
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Access granted (role present)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: { roles: [UserRole.ADMIN] } }
      }
    })

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})
