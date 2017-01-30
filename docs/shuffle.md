#### shuffle(returnOriginal)
- use position replacement algorithm.
- time complexity is O(n), space complexity is O(n).
- the array to shuffle should be even.
- when the argument of the method is true, return the original array.
 Otherwise, return a new array.
 
##### Example
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