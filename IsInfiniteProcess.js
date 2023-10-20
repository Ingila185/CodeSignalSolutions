function solution(a, b) {

    if(a < b) {
     return doesItHaveACommonMeetingPoint(a,b)
       
    }
    
    return (b < a) ? true : (Math.abs(b-a) == 1)? true : false;
    
    }
    
    function doesItHaveACommonMeetingPoint(a,b)
    {
        return (b % 2 === a % 2) ? false: true
    }
    