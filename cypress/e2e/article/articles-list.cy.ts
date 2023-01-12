describe('The user visits a page with a list of articles', () => {
  beforeEach(() => {
    cy.login().then((_data) => {
      cy.visit('articles')
    })
  })
  it('and the articles are loading successfully', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
  it('On stubs (fixtures)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it.skip('Example of a skipped test', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    cy.get('asfasf').should('exist')
  })
})
