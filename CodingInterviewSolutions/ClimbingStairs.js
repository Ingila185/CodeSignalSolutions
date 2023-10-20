function solution(n) {
    solution[1] = 1;
    solution[2] = 2;
    for(var i = 3;  i <= n; i++)
    {
        solution[i] = solution[i-1] + solution[i-2]
    }
    return solution[n]    
 }
