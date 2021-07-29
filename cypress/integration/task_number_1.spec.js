describe('Number 1', function() {

    it('1A GET',function() {

        cy.request({
            method  : 'GET',
            url : 'https://jsonplaceholder.cypress.io/posts',

        })
        .then(function(response)  {
            expect(response.status).to.equal(200)
            expect(response.body[0].userId).to.be.a('number')
            expect(response.body[0].id).to.be.a('number')
            expect(response.body[0].title).to.be.a('String')
            expect(response.body[0].body).to.be.a('String')
        });
    });

    it('1B POST',function() {
        var body={
            "title" : "recommendation",
            "body" : "motorcycle",
            "userId" : "12"
        }
        cy.request({
            method  : 'POST',
            url : 'https://jsonplaceholder.cypress.io/posts',
            body : {
                'title' : 'recommendation',
                'body' : 'motorcycle',
                'userId' : '12'
            }

        })
        .then(function(response)  {
            expect(response.body.title).equal(body.title)
            expect(response.body.body).equal(body.body)
            expect(response.body.userId).equal(body.userId)
        });
    });
});