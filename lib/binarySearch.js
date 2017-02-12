/**
 * Created by a_wav on 2017/1/26.
 */
'use strict';
/**
 * be suitable for the array which includes repeated elements.
 * @param x
 * @param y
 * @param v
 * @returns [L,R)  return a section which includes the left, but doesn't include the right
 *
 * if the left equals the right, then the element v doesn't exist.
 */
function binarySearch(arr,x,y,v,propertyName){

    var L = lower_bound(arr,x,y,v,propertyName);
    var R = upper_bound(arr,x,y,v,propertyName);

    return [L,R];
}


function lower_bound(arr,x,y,v,propertyName) {
    var m;
    var cmp = lteq(propertyName);

    while(x<y){
        m = x + parseInt((y-x)/2);
        if( cmp(v, arr[m]) ){
            y = m;
        }else{
            x = m+1;
        }
    }

    return x;
}

function lteq(propertyName) {
    if(!propertyName){
        return function (a,b) {
            return a<=b;
        };
    }else{
        return function (a,b) {
            return a[propertyName]<=b[propertyName];
        };
    }
}

function upper_bound(arr,x,y,v,propertyName) {
    var m;
    var cmp = lt(propertyName);

    while(x<y){
        m = x + parseInt((y-x)/2);
        if( cmp(v, arr[m]) ){
            y = m;
        }else{
            x = m+1;
        }
    }

    return x;
}

function lt(propertyName) {
    if(!propertyName){
        return function (a,b) {
            return a<b;
        };
    }else{
        return function (a,b) {
            return a[propertyName]<b[propertyName];
        };
    }
}

module.exports = binarySearch;

