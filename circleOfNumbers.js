function solution(n, firstNumber) {
    half = n/2;
    return (firstNumber < half) ?  firstNumber + half : firstNumber - half;
    }
    