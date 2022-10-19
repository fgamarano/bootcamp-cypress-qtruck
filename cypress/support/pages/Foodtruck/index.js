
class FoodTruckPage {

    addReview(review){
        cy.get('textarea[name=comment]')
            .click()
            .type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`)
            .click({ force: true })
        cy.get('button[class=confirm-button]')
            .click()
    }

    reviewShouldBe(user, review) {
        cy.contains('.review-box', user.instagram).as('reviewBox')

        cy.get('@reviewBox')
            .find('.comment p')
            .should('have.text', review.comment)
        
        cy.get('@reviewBox')
            .find('.stars svg')
            .should('have.length', review.stars)
    }
}

export default new FoodTruckPage()