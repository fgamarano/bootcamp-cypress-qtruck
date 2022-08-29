
import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'

describe('Recomendação', () => {
    it('Deve recomendar um food truck', () => {
        const user = {
            name: 'Carlos',
            instagram: '@sainz',
            password: 'pwd123'
        }
        const foodtruck = {
            latitude: '-19.97066654861047',
            longitude: '-43.965445160865784',
            name: 'Point das coxinhas',
            details: 'O lugar com as melhores coxinhas e uma coquinha geladinha',
            opening_hours: 'das 10h às 20h',
            open_on_weekends: true
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)

        mapPage.createLink()

        createPage.location(foodtruck)
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Food truck cadastrado com sucesso!')
    })

    it('Não deve cadastrar foodtruck com nome duplicado', () => {

        const user = {
            name: 'Charles',
            instagram: '@leclerc',
            password: 'pwd123'
        }

        const foodtruck = {
            latitude: '-19.965201096407863',
            longitude: '-43.96468877792359',
            name: 'Rei dos Pateis',
            details: 'O melhor pastel da região com cervejas etupidamentes geladas',
            opening_hours: 'das 16h às 23h',
            open_on_weekends: true
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        mapPage.createLink()

        createPage.location(foodtruck)
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food fruck já foi cadastrado!')
    });

    it('Todos os campos são obrigatorios', () => {
        const user = {
            name: 'Barbara',
            instagram: '@babisantana',
            password: 'pwd123'
        }
        const foodtruck = {
            latitude: '-19.96358764257244',
            longitude: '-43.96280050277711',
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)

        mapPage.createLink()
        createPage.location(foodtruck)
        createPage.submit()
        createPage.modal.haveText('O campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!')
    })
})