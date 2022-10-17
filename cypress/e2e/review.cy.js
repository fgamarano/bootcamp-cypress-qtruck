import mapPage from '../support/pages/map'
import foodtruckPage from '../support/pages/Foodtruck'

describe('Avaliações', () => {

    const user = {
        name: 'Ana Banana',
        instagram: '@aninha',
        password: 'pwd123'
    }

    const foodtruck = {
        latitude: '-19.97131190315524',
        longitude: '-43.96547198295593',
        name: 'Sandubão do Leo',
        details: 'O melhor podrão da região.',
        opening_hours: 'das 20h às 04h',
        open_on_weekends: true
    }

    const review = {
        comment: "Sanduiche muito gorduroso porém a coca tava gelada.",
        stars: "3"
    }

    it('Deve avaliar um foodtruck', () => {

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        mapPage.goToFoodtruck(foodtruck.name)
        foodtruckPage.addReview(review)
        foodtruckPage.reviewShouldBe(user, review)

    })
})