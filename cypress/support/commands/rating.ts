export const setRate = (starsCount = 5, feedback = 'feedback') => {
  cy.getByTestId(`StarRating.${starsCount}`).click()
  cy.getByTestId('RatingCard.Input').type(feedback)
  cy.getByTestId('RatingCard.Send').click()
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      setRate(starsCount: number, feedback: string): Chainable<void>
    }
  }
}
