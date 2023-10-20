function solution(n) {
    
    longestRow = longestCol = (2 * n) -1;
       sum = 0
       count = n;
       i = 0;
   
   if (n == 1) return 1;
   while (count > 1)
   {
     count -- 
     i = i + 2;
     sum = Number(sum +  Number(longestRow - i))  
   }
   
   return Number(2 * sum + longestRow)
   
   }
   
   
   
   
   