/**
 * Created by a_wav on 2017/1/25.
 */
'use strict';
/**
 * get n numbers randomly
 * @param n
 */
function draw(arr,n) {
    var len = arr.length;
    var result = [];


    if(n>len){
        throw new Error('the argument must be less than the length of array');
    }

    for(var i=0,c,ll=len-1;i<n;++i,--ll){
        c = Math.round(Math.random()*ll);
        result.push(arr[c]);
        var tmp = arr[c];
        arr[c] = arr[ll];
        arr[ll] = tmp;
        //[arr[c],arr[ll]] = [arr[ll],arr[c]];
    }

    return result;
}

module.exports = draw;

