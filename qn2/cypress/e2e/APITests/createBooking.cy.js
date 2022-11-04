/// <reference types='Cypress'/>


describe('create a booking', ()=>{
    let accessToken = "832c9b5ed5e2672"

    it('create booking test', ()=>{

        //here we use the fixture method, this is a cypress way of holding test data
        cy.fixture('createbooking').then((payload)=>{

     
              //we make our request to the API just like in postman specifying the method,
        // url, headers, boder
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
            // We get the response from our created object and test of every entry we made is what 
            // we receive in the response.
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