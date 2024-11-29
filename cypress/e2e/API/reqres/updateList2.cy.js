/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('PATCH API Update List using Patch', () => {
    cy.request('PATCH', 'https://reqres.in/api/users/2').then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).has.property('updatedAt')
        })
    })
})