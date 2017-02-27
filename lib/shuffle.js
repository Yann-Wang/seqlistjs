/**
 * Created by a_wav on 2017/1/22.
 */
'use strict';

var deepCopy = require('./deepCopy');

/**
 *
 * @param arr
 */
function riffle_shuffle(arr, alike){
    var len = arr.length;
    var arr2 = new Array(len);
    var m = parseInt(len/3)-1;

    var i=0,j=m+1,k=0;

    while(i<=m && j<len){
        arr2[k++] = arr[j++];
        if(!alike){
            arr2[k++] = arr[j++];
        }
        arr2[k++] = arr[i++];
    }

    while(j<len){
        arr2[k++] = arr[j++];
    }

    for(i=0;i<len;++i){
        arr[i] = arr2[i];
    }

    arr2 = null;

}

/**
 * perfect shuffle -- position replacement
 * time complexity is O(n), space complexity is O(n)
 * @returns {*}
 */
 function perfect_shuffle(arr) {
    var len = arr.length;
    var arr2 = new Array(len);
    var n;

    n = len/2;
    for(var i=0;i<len;++i){
        arr2[(2*i+1)%(2*n+1)] = arr[i];
    }

    for(var j=0;j<len;++j){
        arr[j] = arr2[j];
    }

    arr2 = null;

    return arr;
}


function shuffle(arr, returnOriginal){
     if(returnOriginal){
         riffle_shuffle(arr, false);
         perfect_shuffle(arr);
         riffle_shuffle(arr, true);

         return arr;
     }else{
         var len = arr.length;
         var arr2 = new Array(len);

         deepCopy(arr, arr2);

         riffle_shuffle(arr2, false);
         perfect_shuffle(arr2);
         riffle_shuffle(arr2, true);

         return arr2;
     }
}

module.exports = shuffle;