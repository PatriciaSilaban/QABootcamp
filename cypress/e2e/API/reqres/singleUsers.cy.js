/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Get API Single Users', () => {
        cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.not.be.null
            expect(response.body).has.property('data')
            expect(response.body).has.property('support')
        })
    })
})