/**
 * Created by a_wav on 2017/1/27.
 */
'use strict';
var chai = require('chai');
var assert = chai.assert;
var SeqList = require('../');

describe('#draw()', function() {
    it('draw n numbers from array randomly.', function(done) {
        var arr = [3,2,1,6,4,8,5,7];
        var seqlist = new SeqList(arr);
        var result = seqlist.draw(3);

        //assert.deepEqual(result,[5,1,6,2,7,3,8,4]);
        console.log(result);
        done();
    });
});

describe('#draw()', function() {
    it('the element is a object', function(done) {
        var arr = [{x:3},{x:2},{x:1},{x:6},{x:4},{x:8},{x:5},{x:7}];
        var seqlist = new SeqList(arr);
        var result = seqlist.draw(3);

        //assert.deepEqual(result,[5,1,6,2,7,3,8,4]);
        console.log(result);
        done();
    });
});