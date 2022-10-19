import mapPage from '../support/pages/map'
import foodtruckPage from '../support/pages/Foodtruck'
import createReview from '../fixtures/review'

describe('Avaliações', () => {
   
    //console.log(JSON.stringify(var));
    
    const data = createReview

    it('Deve avaliar um foodtruck', () => {

        cy.apiCreateUser(data.user)
        cy.apiLogin(data.user)
        cy.apiCreateFoodTruck(data.foodtruck)

        cy.uiLogin(data.user)

        mapPage.goToFoodtruck(data.foodtruck.name)
        foodtruckPage.addReview(data.review)
        foodtruckPage.reviewShouldBe(data.user, data.review)

    })
})