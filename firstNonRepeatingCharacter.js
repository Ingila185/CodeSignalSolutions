function solution(s) {

    for(var i = 0; i < s.length; i++){
        
        let char = s[i]
        if(s.indexOf(char) ==  i && s.indexOf(char , i+1) == -1 ) return char
    }
    return '_'
    }
    
    