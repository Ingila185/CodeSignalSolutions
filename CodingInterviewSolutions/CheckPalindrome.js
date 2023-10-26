function solution(inputString) {
    if (inputString.length % 2 == 0)
    {
        //check for Even numbered palindrome
        var half = Number(inputString.length / 2);    
        var firstHalf = inputString.substr(0,Number(half))
        var secHalf = inputString.substr(half, Number(inputString.length -1 ))
    
        var tempArr = secHalf.split("")
        tempArr = tempArr.reverse();
        secHalf = tempArr.join("")
     
         if (firstHalf === secHalf)
            {
                return true
            }
            
            else return false
    
    }
    
    else
    {
        //check for odd-numbered palindrome
        
            var middleIdx = Math.floor( Number(inputString.length/2));
            console.log("Odd")
            var firstHalf = inputString.substr(0, middleIdx)
            var secHalf = inputString.substr(middleIdx+1, inputString.length-1 )
             tempArr = secHalf.split("")
        tempArr = tempArr.reverse();
        secHalf = tempArr.join("")
      
            if (firstHalf === secHalf)
            {
                return true
            }
            
            else return false
    }
    }
    