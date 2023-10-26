function solution(n) {
    
    hoursSum = 0;
    minsSum = 0;
    
    
hours = Math.floor(Number(n/60));

mins =  Number(n%60)
while (hours)
{
    hoursSum += hours % 10;
    hours = Math.floor(hours / 10)
}


while (mins)
{
    minsSum += mins % 10;
    mins = Math.floor(mins / 10)
}

return Number(hoursSum + minsSum)
}
