/// <reference types='Cypress'/>

// const { method } = require("cypress/types/bluebird")

describe('get api bookings', ()=>{
    let accessToken = "832c9b5ed5e2672"

    it('get booking', ()=>{

        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/8580',
            headers: {
                'Athourization' : 'Bearer' + accessToken
            },
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.firstname).to.eq('Joel')
            expect(response.body.lastname).to.eq('Masete')
            expect(response.body.totalprice).to.eq(200)
            expect(response.body.depositpaid).to.eq(true)
            expect(response.body.bookingdates.checkin).to.eq("2022-11-01")
            expect(response.body.bookingdates.checkout).to.eq("2012-12-01")
            expect(response.body.additionalneeds).to.eq("Brunch")
        })
    })
})