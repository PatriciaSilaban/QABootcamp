/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('PUT API Update List', () => {
    cy.request('PUT', 'https://reqres.in/api/users/2').then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).has.property('updatedAt')
        })
    })
})