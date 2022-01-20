const app = require('../app')
const request = require('supertest')
const chai = require('chai'),
    expect = chai.expect , assert = chai.assert;

 var champ = {
    name: "testname",
    title: "testtitle",
    type: "testtype",
    hp:"2",
    mp:"3",
    ms:"4",
    armor:"6",
    ar:"8",
    ad:"9",
    as:"0"
   }
var champ1 = {
    name:"testname",
    title:"testtitle",
    type:"testtype",  
   }

describe('JSON', () => {
    it('Render View with data', done => {
        request(app)
            .get('/json')
            .end((err, res) => {
                 expect(res.header['content-type']).to.equal('text/html; charset=utf-8');
                 expect(res.text).to.include("Rise of the Thorns")
                 done()          
            })
              
    })
     it('Render View inputs', done => {
        request(app)
            .get('/json/add')
            .end((err, res) => {
                 expect(res.header['content-type']).to.equal('text/html; charset=utf-8');
                 expect(res.text).to.include("Add champs")
                 done()          
            })
              
    })

    it('Add data to JSON', done => {
        request(app)
            .post('/json/add')
            .send(champ1)           
            .end((err, res) => {
                expect(res.statusCode).to.equal(302);
                done()
            })
    })

})
describe('DB', () => {
   it('Render View with data', done => {
        request(app)
            .get('/db')
            .end((err, res) => {
                 expect(res.header['content-type']).to.equal('text/html; charset=utf-8');
                 expect(res.text).to.include("League of legends champs")
                 done()          
            })
              
    })
     it('Render View inputs', done => {
        request(app)
            .get('/db/add')
            .end((err, res) => {
                 expect(res.header['content-type']).to.equal('text/html; charset=utf-8');
                 expect(res.text).to.include("Add champs")
                 done()          
            })
              
    })

    it('Add data to DB', done => {
        request(app)
            .post('/db/add')
            .send(champ)           
            .end((err, res) => {
                expect(res.statusCode).to.equal(302);
                done()
            })
    })
})
