/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('POST API Create List', () => {
        cy.request('POST', 'https://reqres.in/api/users').then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.not.be.null
            })
    })
})