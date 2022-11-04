/// <reference types='Cypress'/>


describe('create a booking', ()=>{
    let accessToken = "832c9b5ed5e2672"

    it('create booking test', ()=>{
        cy.fixture('createbooking').then((payload)=>{

     
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            headers: {
                'Athourization' : 'Bearer' + accessToken
            },
            body: {
                "firstname" : payload.firstname,
                "lastname" : payload.lastname,
                "totalprice" : payload.totalprice,
                "depositpaid" : payload.depositpaid,
                "bookingdates" : payload.bookingdates,
                "additionalneeds" : payload.additionalneeds
            }
        }).then((response)=>{
            console.log(response.body)
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(200)
            expect(response.body.booking).to.have.property('firstname',payload.firstname)
            expect(response.body.booking).to.have.property('lastname',payload.lastname)
            expect(response.body.booking).to.have.property('totalprice',payload.totalprice)
            expect(response.body.booking).to.have.property('depositpaid',payload.depositpaid)
            expect(response.body.booking.bookingdates).to.eql(payload.bookingdates)
            expect(response.body.booking).to.have.property('additionalneeds',payload.additionalneeds)
        })
    })
})
})