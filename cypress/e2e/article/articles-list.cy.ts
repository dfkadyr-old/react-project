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
})
