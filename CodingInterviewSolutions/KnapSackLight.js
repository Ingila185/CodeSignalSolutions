function solution(value1, weight1, value2, weight2, maxW) {
    maxC = weight1 + weight2;
    
    if(maxW == 0) return 0;
    if (maxW < weight1 && maxW < weight2) return 0;
    
    if (maxW >= maxC)
    {
        return Number(value1 + value2)
    }
    
    if(maxW < maxC && maxW != weight1 && maxW != weight2)
    {
        if(maxW > weight1 && maxW > weight2)    return (value1 > value2) ? value1 : value2
    }
    
    if (maxW < maxC && (maxW == weight1 || maxW == weight2))
    {  
      if (maxW >= weight1 && maxW >= weight2) return (value1 > value2) ? value1: value2  
      if(maxW < weight2) return value1
      if(maxW < weight1) return value2
    }
    
    }
    