import { User } from '../../../src/entities/user'
import { AUTH_USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage'
import { selectByTestId } from '../../helpers/select-by-test-id'

export const login = (username: string = 'testuser', password: string = '123') => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password
    }
  }).then(({ body }) => {
    window.localStorage.setItem(AUTH_USER_LOCALSTORAGE_KEY, JSON.stringify(body))
    return body
  })
}

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId))
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      login(email?: string, password?: string): Chainable<User>
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
