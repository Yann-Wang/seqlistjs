/**
 * Created by a_wav on 2017/1/25.
 */
'use strict';
const chai = require('chai');
let assert = chai.assert;
let SeqList = require('../');

describe('#shuffle()', function() {
    it('length is 8', function(done) {
        let arr = [1,2,3,4,5,6,7,8];
        let seqlist = new SeqList(arr);
        let result = seqlist.shuffle();

        assert.deepEqual(result,[5,1,6,2,7,3,8,4]);
        done();
    });
});

describe('#shuffle()', function() {
    it('length is 2', function(done) {
        let arr = [1,2];
        let seqlist = new SeqList(arr);
        let result = seqlist.shuffle();

        assert.deepEqual(result,[2,1]);
        done();
    });
});

describe('#shuffle()', function() {
    it('the element is a object', function(done) {
        let arr = [{x:1},{x:2}];
        let seqlist = new SeqList(arr);
        let result = seqlist.shuffle();

        assert.deepEqual(result,[{x:2},{x:1}]);
        done();
    });
});
