/**
 * Created by gospray on 17-1-22.
 */

let Shuffle = require('./lib/shuffle');
let Topk = require('./lib/topk');
let Draw = require('./lib/draw');
let BinarySearch = require('./lib/binarySearch');

class SeqList{
    constructor(arr){
        this.seqlist = arr;
        this.shuffle = this.shuffle.bind(this);
        this.topk = this.topk.bind(this);
        this.draw = this.draw.bind(this);
        this.binarySearch = this.binarySearch.bind(this);
    }

    shuffle(returnOriginal){
        return Shuffle(this.seqlist,returnOriginal);
    }

    topk(k,state,propertyName){
        return Topk(this.seqlist,k,state,propertyName);
    }

    draw(n){
        return Draw(this.seqlist,n);
    }

    binarySearch(x,y,v,propertyName){
        return BinarySearch(this.seqlist,x,y,v,propertyName);
    }
}

module.exports = SeqList;