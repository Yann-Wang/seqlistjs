/**
 * Created by a_wav on 2017/1/22.
 */
/**
 * perfect shuffle -- position replacement
 * time complexity is O(n), space complexity is O(n)
 * @returns {*}
 */
 function shuffle(arr,returnOriginal) {
    var len = arr.length;
    var n = len/2;
    var arr2 = new Array(len);

    for(var i=0;i<len;++i){
        arr2[(2*i+1)%(2*n+1)] = arr[i];
    }

    if(!returnOriginal){
        return arr2;
    }

    for(var j=0;j<len;++j){
        arr[j] = arr2[j];
    }

    return arr;
}

module.exports = shuffle;