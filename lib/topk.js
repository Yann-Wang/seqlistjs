/**
 * Created by a_wav on 2017/1/25.
 */
'use strict';
/**
 * get the max k numbers or the min k numbers
 * time complexity is O(nlgk), space complexity is O(1)
 * @param k
 * @param state
 */
function topk(arr,k,state,propertyName) {

    if(state !== undefined && state !== 'max' && state !== 'min'){
        throw new Error("the state argument can just select 'max' or 'min', default 'max' ");
    }
    if(state === undefined){
        state = 'max';
    }

    var len = arr.length;
    var cmp = genCmp(state,propertyName);



    // create heap
    for(var i=parseInt((k-1)/2);i>=0;--i){
        adjust(arr,i,k-1,state,propertyName);
    }

    for(var j=k;j<len;++j){

        if(cmp(arr[j],arr[0])){
            var tmp;
            tmp = arr[0];
            arr[0] = arr[j];
            arr[j] = tmp;
            //[arr[0],arr[j]] = [arr[j],arr[0]];
            adjust(arr,0,k-1,state,propertyName);
        }
    }

    return arr.slice(0,k);
}

function adjust(arr,low,high,state,propertyName){
    var i = low;
    var j = 2*i+1;
    var tmp = arr[i];

    var cmp = genCmp(state,propertyName);

    while(j<=high){

        if(j<high && cmp(arr[j],arr[j+1])){
            ++j;
        }

        if(cmp(tmp,arr[j])){
            arr[i] = arr[j];
            i = j;
            j = 2*i + 1;
        }else
            break;
    }

    arr[i] = tmp;
}

function genCmp(state,propertyName){
    if(state==='max'){
        if(!propertyName){
            return function(a,b){
                return a>b;
            };
        }else{
            return function(a,b){
                return a[propertyName]>b[propertyName];
            };
        }
    }else{
        if(!propertyName){
            return function(a,b){
                return a<b;
            };
        }else{
            return function(a,b){
                return a[propertyName]<b[propertyName];
            };
        }
    }
}

module.exports = topk;

