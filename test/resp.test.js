//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('MainService', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    /*
     * Test the /GET route
     */
    describe('/GET function ADD', () => {
        it('it should GET result function Add', (done) => {
            let obj = {
                numA: 1, numB: 2, expected: 3
            }
            chai.request(server)
                .get(`/add/${obj.numA}/${obj.numB}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('result').eql(obj.expected);
                    setImmediate(done);
                });
        });
    });
});