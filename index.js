/**
 * Created by gospray on 17-1-22.
 */
'use strict';
var Shuffle = require('./lib/shuffle');
var Topk = require('./lib/topk');
var Draw = require('./lib/draw');
var BinarySearch = require('./lib/binarySearch');

function SeqList(arr){
    this.seqlist = arr;
}

SeqList.prototype.shuffle = function(returnOriginal){
    return Shuffle(this.seqlist,returnOriginal);
};

SeqList.prototype.topk = function(k,state,propertyName){
    return Topk(this.seqlist,k,state,propertyName);
};

SeqList.prototype.draw = function(n){
    return Draw(this.seqlist,n);
};

SeqList.prototype.binarySearch = function(x,y,v,propertyName){
    return BinarySearch(this.seqlist,x,y,v,propertyName);
};



module.exports = SeqList;