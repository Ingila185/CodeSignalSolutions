function solution(nCols, nRows, col, row) {
    remainingCols = nCols - col;
    //16 - 5 = 11
    remainingRows = nRows - row;
    //11-3 = 8
    
    //console.log(remainingRows, remainingCols)
    return Number(remainingCols * remainingRows + remainingRows )
    
    
    }
    