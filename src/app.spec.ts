import app from './app';
import * as chai from 'chai';
import chaHttp = require('chai-http');


import 'mocha';

chai.use(chaHttp);

const expect = chai.expect;

describe('Hello API Request', ()=>{
    it('should return hello on call', async()=>{
        return chai.request(app).get('/')
            .then(res => {
                chai.expect(res.text).to.eql('Hello!!')
            })
    })
})