
function solution(n) {
digits = (String(n).split("")).map(Number)
if (digits.length > 0)
{
    return digits[0] + digits[1];

}
else return 0;
}
