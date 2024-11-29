/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Get API List Users', () => {
        cy.request('GET', 'https://reqres.in/api/user?page=2').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.not.be.null
            expect(response.body).has.property('data')
        })
    })
})