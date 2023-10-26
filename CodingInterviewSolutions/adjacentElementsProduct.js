function solution(inputArray) {
    arrayOfProducts = [];
    len = inputArray.length;
    
    for (idx = 0; idx < len - 1; idx++)
    {
        var product = Number(inputArray[idx] * inputArray[idx+1])
        arrayOfProducts.push(product)
        
    }
    
    
    arrayOfProducts = arrayOfProducts.sort(function(a, b){return a-b})
    ans = arrayOfProducts[len-2];
    return ans ;
    
    }
    