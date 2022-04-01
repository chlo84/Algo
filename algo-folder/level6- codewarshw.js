function palindrome(num) {
    if(typeof num != 'number' || num < 0 || num % 1 != 0) return 'Not valid' 
     if(num < 10) return false
   //  turning number into a string so that I can for loop 
     num += '' 
   // for looping after the first iteration before the last so that I can compare the both sides of i.
     for(let i = 1; i < num.length -1; i++){
   // comparing i to the iteration before and after it    
       if(num[i] == num[i -1] || num[i] == num[i +1])
         return true;
   // comparing both sides of i to eachother    
       if(num[i -1] == num[i +1])
         return true;
     }
     return false;
   }