/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Get API List Resource', () => {
        cy.request('GET', 'https://reqres.in/api/unknown').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body).has.property('data')
        })
    })
})