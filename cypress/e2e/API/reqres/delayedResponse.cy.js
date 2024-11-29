/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('Get API Delayed Response', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?delay=3',
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.be.an('array')
        })
    })
})
