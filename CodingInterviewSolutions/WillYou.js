function solution(young, beautiful, loved) {
    
    
    if(young == true && beautiful == true && loved == false)
    {
        return true;
        
    }
    
    if(loved == true && (young == false || beautiful == false))
    {
        return true
    }
    
    return false;
    
    }
    