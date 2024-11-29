/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('DELETE API Delete List', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).to.equal(204)
            })
    })
})