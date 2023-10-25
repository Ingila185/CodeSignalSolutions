function solution(a) {

    var ans = [];
    
    for(var j = 0; j< a.length; j++)
    {
        let arrayP = [] ; 
    
        for (var i = a.length-1; i >= 0; i--)
    {    
        var shiftedArray = a[i].shift();
        arrayP.push(shiftedArray)
    }
        ans.push(arrayP)
    
    }
    
    return ans
    
    }
    