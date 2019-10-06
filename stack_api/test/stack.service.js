var service = require("../services/stack.service");
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const assert = chai.assert;

describe('Stack Service Methods', function () {
    it('Should work push method', async function () {
       await service.push(12345);       
       var peek = await service.peek();       
       assert(peek != null);
       assert.equal(peek, 12345);
    });

    it('Should work peek method', async function () {
        var peek = await service.peek();
        assert.equal(peek, 12345);
     });

     it('Should work smaller method', async function () {
        var smaller = await service.smaller();
        assert.equal(smaller, 1);
     });

     it('Should work bigger method', async function () {
        var bigger = await service.bigger();
        assert.equal(bigger, 12345);
     });     
});

