###### binarySearch(lower_bound,upper_bound,value[,propertyName])
- use binary search algorithm.
- the sequence list should be ordered.
- time complexity is O(lgn), space complexity is O(1).
- return a section which includes the left, but doesn't include the right. 
 
##### Example
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
 