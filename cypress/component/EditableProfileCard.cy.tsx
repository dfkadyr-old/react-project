import { EditableProfileCard } from '@/features/editable-profile-card'
import { TestProvider } from '@/shared/lib/tests/component-render'

const USER_ID = '1'

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: {
                id: USER_ID
              }
            }
          }
        }}
      >
        <EditableProfileCard id={USER_ID} />
      </TestProvider>
    )
  })
})
