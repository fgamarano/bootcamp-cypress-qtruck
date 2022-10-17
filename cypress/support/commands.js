// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from './pages/Login'
import mapPage from './pages/Map'

Cypress.Commands.add('apiResetUser', (instagram) => {
    cy.request({
        url: 'http://localhost:3333/helpers-reset',
        method: 'DELETE',
        qs: { instagram: instagram }
    }).then(response => {
        expect(response.status).to.eq(204)
    })
})

Cypress.Commands.add('apiCreateUser', (payload) => {

    cy.apiResetUser(payload.instagram)

    cy.request({
        url: 'http://localhost:3333/signup',
        method: 'POST',
        body: payload
    }).then(response => {
        expect(response.status).to.eq(201)
    })
})

Cypress.Commands.add('apiLogin', (payload) => {
    cy.request({
        url: 'http://localhost:3333/sessions',
        method: 'POST',
        body: payload
    }).then(response => {
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token)
    })
})

Cypress.Commands.add('apiCreateFoodTruck', (payload) => {
    cy.request({
        url: 'http://localhost:3333/foodtrucks',
        method: 'POST',
        body: payload,
        headers: {
            'authorization': Cypress.env('token')
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('uiLogin', (user) => {
    loginPage.go('-19.965201096407863', '-43.96468877792359')
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
})

Cypress.Commands.add('setGeolocation', (lat, long) => {
    localStorage.setItem('qtruck:latitude', lat)
    localStorage.setItem('qtruck:longitude', long)
})