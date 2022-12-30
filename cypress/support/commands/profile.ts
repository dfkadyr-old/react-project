export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditBtn').click()
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
  cy.getByTestId('EditableProfileCardHeader.SaveBtn').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 465,
      currency: 'EUR',
      country: 'Ukraine',
      city: 'Moscow',
      username: 'testuser',
      avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg'
    }
  })
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      updateProfile(firstname: string, lastname: string): Chainable<void>
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
