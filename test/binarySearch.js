/**
 * Created by a_wav on 2017/1/30.
 */
'use strict';
var chai = require('chai');
var assert = chai.assert;
var SeqList = require('../');

describe('#binarySearch()', function() {
    it('return a section which include the lower bound and the upper bound.', function(done) {
        var arr = [0,1,2,3,4,5,5,5,8,9];
        var seqlist = new SeqList(arr);
        var result = seqlist.binarySearch(0,arr.length,5);

        assert.deepEqual(result,[5,8]);
        console.log(result);
        done();
    });
});


describe('#binarySearch()', function() {
    it('the element is a object', function(done) {
        var arr = [{x:0},{x:1},{x:2},{x:3},{x:4},{x:5},{x:5},{x:5},{x:8},{x:9}];
        var seqlist = new SeqList(arr);
        var result = seqlist.binarySearch(0,arr.length,{x:5},'x');

        assert.deepEqual(result,[5,8]);
        console.log(result);
        done();
    });
});
