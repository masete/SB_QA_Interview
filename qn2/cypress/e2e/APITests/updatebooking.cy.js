/// <reference types='Cypress'/>


describe('create a booking', ()=>{
    let accessToken = "832c9b5ed5e2672"

    it('create booking test', ()=>{

     
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            headers: {
                'Athourization' : 'Bearer' + accessToken
            },
            body: { "firstname" : "anne",
                    "lastname" : "Martha",
                    "totalprice" : 200,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2022-11-01",
                        "checkout" : "2012-12-01"
                                },
                    "additionalneeds" : "supperx"}
        }).then((response)=>{
            // cy.log(JSON.stringify(response))
            expect(response.status).to.eq(200)
            expect(response.body.booking).to.have.property('firstname',"anne")
            expect(response.body.booking).to.have.property('lastname',"Martha")
            expect(response.body.booking).to.have.property('totalprice',200)
            expect(response.body.booking).to.have.property('depositpaid',true)
            expect(response.body.booking.bookingdates).to.eql({
                "checkin" : "2022-11-01",
                "checkout" : "2012-12-01"
                        })
            expect(response.body.booking).has.property('additionalneeds','supperx')
        }).then((response)=>{
            const bookingid = response.body.booking.bookingid

            cy.log('user id is' + bookingid)

            cy.request({
                method: 'PUT',
                url: 'https://restful-booker.herokuapp.com/booking',
                headers: {
                    'Athourization' : 'Bearer' + accessToken
                },
                body: { "firstname" : "anne-Updated",
                        "lastname" : "Martha-Atuheire",
                        "totalprice" : 300,
                        "depositpaid" : true,
                        "bookingdates" : {
                            "checkin" : "2022-11-01",
                            "checkout" : "2012-12-01"
                                    },
                        "additionalneeds" : "supper"}
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body).has.property('firstname','anne-Updated')
                expect(response.body).has.property('lastname','Martha-Atuheire')
                expect(response.body).has.property('totalprice',200)
                expect(response.body).has.property('depositpaid',300)
                expect(response.body).has.property( "bookingdates", {
                    "checkin" : "2022-11-01",
                    "checkout" : "2012-12-01"
                            })
                expect(response.body).has.property('additionalneeds','supper')
            })

            
        })
    })
})
