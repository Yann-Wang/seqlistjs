/**
 * Created by a_wav on 2017/1/25.
 */
'use strict';
var chai = require('chai');
var assert = chai.assert;
var SeqList = require('../');

describe('#shuffle()', function() {
    it('length is 8', function(done) {
        var arr = [1,2,3,4,5,6,7,8];
        var seqlist = new SeqList(arr);
        var result = seqlist.shuffle();

        assert.deepEqual(result,[5,1,6,2,7,3,8,4]);
        done();
    });

    it('length is 2', function(done) {
        var arr = [1,2];
        var seqlist = new SeqList(arr);
        var result = seqlist.shuffle();

        assert.deepEqual(result,[2,1]);
        done();
    });

    it('the element is a object', function(done) {
        var arr = [{x:1},{x:2}];
        var seqlist = new SeqList(arr);
        var result = seqlist.shuffle();

        assert.deepEqual(result,[{x:2},{x:1}]);
        done();
    });
});
