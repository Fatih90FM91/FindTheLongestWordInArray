// Return the length of the longest word in the provided sentence.

// Your response should be a number. For these algorithms you are allowed to use the split() method.

// findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
// findLongestWord("May the force be with you") should return 5.


 function findLongestWord(word){
 let  arr =[];

 arr=word.split(" ");
 let largestWord=arr[0];
 for (let i = 0; i< arr.length; i++) {
     
    if(arr[i].length>largestWord.length){

        largestWord=arr[i];
        console.log( largestWord);
        console.log( largestWord.length);
    }
 }


 console.log(arr);


  
    return word;
 }

 findLongestWord("May the force be with you");