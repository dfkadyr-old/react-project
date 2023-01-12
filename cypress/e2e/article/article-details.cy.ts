let currentArticleId = ''
describe('User visits article page', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      currentArticleId = article.id
      cy.visit(`articles/${article.id}`)
    })
  })
  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })
  it('And sees the content of the article', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })
  it('And sees a list of recommendations', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })
  it('And leave a comment', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('text')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })
  it('And evaluates', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
  })
  it('And puts a rating (an example with a stub on fixtures)', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
  })
})
