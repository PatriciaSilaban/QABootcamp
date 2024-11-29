/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('POST API Login Unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: { email: "peter@klaven" },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.error).to.equal('Missing password')
        })
    })
})
