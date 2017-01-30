/**
 * Created by a_wav on 2017/1/27.
 */
const chai = require('chai');
let assert = chai.assert;
let SeqList = require('../');

describe('#draw()', function() {
    it('draw n numbers from array randomly.', function(done) {
        let arr = [3,2,1,6,4,8,5,7];
        let seqlist = new SeqList(arr);
        let result = seqlist.draw(3);

        //assert.deepEqual(result,[5,1,6,2,7,3,8,4]);
        console.log(result);
        done();
    });
});

describe('#draw()', function() {
    it('the element is a object', function(done) {
        let arr = [{x:3},{x:2},{x:1},{x:6},{x:4},{x:8},{x:5},{x:7}];
        let seqlist = new SeqList(arr);
        let result = seqlist.draw(3);

        //assert.deepEqual(result,[5,1,6,2,7,3,8,4]);
        console.log(result);
        done();
    });
});