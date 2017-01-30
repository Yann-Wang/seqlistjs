#### draw(n)
- use disorder algorithm.
- draw k numbers from a array randomly.
- time complexity is O(k), space complexity is O(1).
- return a array which includes k numbers.

##### Example
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