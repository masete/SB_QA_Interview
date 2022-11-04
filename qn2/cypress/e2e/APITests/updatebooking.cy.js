/// <reference types='Cypress'/>


describe('create a booking', ()=>{
    // we define our token as a global variable in this file, this way
    // we can reuse it for both methods in this file.
    let accessToken = "832c9b5ed5e2672"

    it('create booking test', ()=>{
    
        //we make our request to the API just like in postman specifying the method,
        // url, headers, boder
     
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
                    "additionalneeds" : "supper"}
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
            expect(response.body.booking).to.have.property('additionalneeds','supper')
        }).then((response)=>{
            //we have to capture the id of the previous object we have just created 
            // so that we edit that same object.
            const bookingid = response.body.bookingid

            cy.log('booking id is' + bookingid)

            cy.request({
                method: 'PUT',
                url: 'https://restful-booker.herokuapp.com/booking/'+bookingid,
                headers: {
                    'Athourization' : 'Bearer' + accessToken
                },
            // Our body in the PUT method you notice it is not the same as that in the 
            // post method.
                body: { "firstname" : "anne-Updated",
                        "lastname" : "Martha-Atuheire",
                        "totalprice" : 300,
                        "depositpaid" : true,
                        "bookingdates" : {
                            "checkin" : "2022-11-01",
                            "checkout" : "2012-12-01"
                                    },
                        "additionalneeds" : "supper,break"}
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.booking).to.have.property('firstname','anne-Updated')
                expect(response.body.booking).to.have.property('lastname','Martha-Atuheire')
                expect(response.body.booking).to.have.property('totalprice',200)
                expect(response.body.booking).to.have.property('depositpaid',300)
                expect(response.body.booking).to.eql({
                    "checkin" : "2022-11-01",
                    "checkout" : "2012-12-01"
                            })
                expect(response.body.booking).to.have.property('additionalneeds','supper')
            })

            
        })
    })
})

// For the case of PUT method, the server is forbidding us from changing anything, so it is throwing 
//403 status code.