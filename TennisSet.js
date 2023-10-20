function solution(score1, score2) {
    /*
   if score1 is 6, score2 <=4 , true
   if score1 = 6, score2 = 5, false
   if score1 && score2 > 7, return false
   if score1 && score2 == 0, return false
   if score1 = 7 && score2 =  5, return true
   if score1 = 7 && score2 =  2, return false
   
   if score1 = 7 && score2 =  6, return true
   
   
   sum = Number(score1 + score2);
   
   console.log(score1, score2, sum)
   
   return (score1 == 6  && score2 <= 4 || (score2 == 6  && score1 <= 4)) ||  (score1 == 7 && (score2 == 5 || score2 ==6)) || ((score1 == 7 && (score2 == 5 || score2 ==6)))  ? true : false */

    var isSeventhScoreRequired = (Math.max(score1, score2) == 6 && Math.min(score1, score2) == 5) ? true :
        (Math.max(score1, score2) == 7 && (Math.min(score1, score2) == 5 || Math.min(score1, score2) == 6)) ? true : false


    var maxWinningScore = (isSeventhScoreRequired === true) ? 7 : 6;
    var maxTiedScoreLoser = (isSeventhScoreRequired === true) ? 6 : 4

    if (isSeventhScoreRequired === true) {
        //max of score1 or score 2 === 7 if it does, return false;
        //max score of losing side can be 6
        var winner = Math.max(score1, score2) == maxWinningScore
        var loser = Math.min(score1, score2) <= maxTiedScoreLoser



        return (winner === true && loser === true) ? true : false

    }

    else {
        //Competetion ended on 6th score i.e score 1 == 6 and score2 < 5
        return (Math.max(score1, score2) === 6 && Math.min(score1, score2) < 5) ? true : false


    }



}