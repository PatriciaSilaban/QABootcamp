/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('POST API Register Unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: { email: "eve.holt@reqres.in" },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
        })
    })
})