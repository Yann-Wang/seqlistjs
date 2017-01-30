#### topk(k,state[,propertyName])
- use heap sort algorithm.
- time complexity is O(nlgk), space complexity is O(1).
- when the state is 'max', return the max top k elements. 
when the state is 'min', return the min top k elements.

##### Example
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