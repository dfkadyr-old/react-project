import { selectByTestId } from '../../helpers/select-by-test-id'

describe('Routing', () => {
  describe('User not found', () => {
    it('Go to main page', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Then open profile page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Opens a route that doesnt exist', () => {
      cy.visit('/fasfasfasf')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })
  describe('User is authorized', () => {
    beforeEach(() => {
      cy.login()
    })
    it('The transition opens the profile page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('The transition opens a page with a list of articles', () => {
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
  })
})
