
### Sequence List
[![NPM version](https://img.shields.io/npm/v/seqlist.svg)]()
#### Installation
```shell
npm install --save seqlist

```

#### Usage
```javascript
let seqlist = require('seqlist');
```

#### Tests
To run the test suite, first install the dependencies, then run npm test:
```shell
git clone git@github.com:Yann-Wang/seqlistjs.git --depth 1
cd SeqList
npm install
npm test

```

#### Method
- shuffle
- topk
- draw
- binarySearch

##### [shuffle(returnOriginal)](https://github.com/Yann-Wang/seqlistjs/blob/master/docs/shuffle.md)
- use position replacement algorithm.
- time complexity is O(n), space complexity is O(n).
- the array to shuffle should be even.
- when the argument of the method is true, return the original array.
 Otherwise, return a new array.
 
```javascript
let SeqList = require('seqlist');

let arr = [1,2,3,4,5,6,7,8];
let seqlist = new SeqList(arr);
let result = seqlist.shuffle();

console.log(result);

let arr2 = [{x:1},{x:2}];
let seqlist2 = new SeqList(arr2);
let result2 = seqlist2.shuffle();

console.log(result2);

let arr3 = [1,2,3,4,5,6,7,8];
let seqlist3 = new SeqList(arr3);
let result3 = seqlist3.shuffle(true);

console.log(result3);

``` 

##### [topk(k,state[,propertyName])](https://github.com/Yann-Wang/seqlistjs/blob/master/docs/topk.md)
- use heap sort algorithm.
- time complexity is O(nlgk), space complexity is O(1).
- when the state is 'max', return the max top k elements. 
when the state is 'min', return the min top k elements.
```javascript
let SeqList = require('seqlist');

let arr = [3,2,1,6,4,8,5,7];
let seqlist = new SeqList(arr);
let result = seqlist.topk(4,'max');

console.log(result);

let arr2 = [{x:3},{x:2},{x:1},{x:6},{x:4},{x:8},{x:5},{x:7}];
let seqlist2 = new SeqList(arr2);
let result2 = seqlist2.topk(4,'min','x');

console.log(result2);
```

##### [draw(n)](https://github.com/Yann-Wang/seqlistjs/blob/master/docs/draw.md)
- use disorder algorithm.
- draw k numbers from a array randomly.
- time complexity is O(k), space complexity is O(1).
- return a array which includes k numbers.

```javascript
let SeqList = require('seqlist');

let arr = [3,2,1,6,4,8,5,7];
let seqlist = new SeqList(arr);
let result = seqlist.draw(3);

console.log(result);


let arr2 = [{x:3},{x:2},{x:1},{x:6},{x:4},{x:8},{x:5},{x:7}];
let seqlist2 = new SeqList(arr2);
let result2 = seqlist2.draw(3);

console.log(result2);

```

##### [binarySearch(lower_bound,upper_bound,value[,propertyName])](https://github.com/Yann-Wang/seqlistjs/blob/master/docs/binarySearch.md)
- use binary search algorithm.
- the sequence list should be ordered.
- time complexity is O(lgn), space complexity is O(1).
- return a section which includes the left, but doesn't include the right. 

```javascript
 let SeqList = require('seqlist');
 
 let arr = [0,1,2,3,4,5,5,5,8,9];
 let seqlist = new SeqList(arr);
 let result = seqlist.binarySearch(0,arr.length,5);
 
 console.log(result);
 
 
 let arr2 = [{x:0},{x:1},{x:2},{x:3},{x:4},{x:5},{x:5},{x:5},{x:8},{x:9}];
 let seqlist2 = new SeqList(arr2);
 let result2 = seqlist2.binarySearch(0,arr.length,{x:5},'x');
 
 console.log(result2);
 ```






