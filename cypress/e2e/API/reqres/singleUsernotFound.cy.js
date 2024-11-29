/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Get API Single User Not Found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
})
