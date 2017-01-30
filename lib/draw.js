/**
 * Created by a_wav on 2017/1/25.
 */

/**
 * get n numbers randomly
 * @param n
 */
function draw(arr,n) {
    let len = arr.length;
    let result = [];

    if(n>len){
        throw new Error('the argument must be less than the length of array');
    }

    for(let i=0,c,ll=len-1;i<n;++i,--ll){
        c = Math.round(Math.random()*ll);
        result.push(arr[c]);
        [arr[c],arr[ll]] = [arr[ll],arr[c]];
    }

    return result;
}

module.exports = draw;

