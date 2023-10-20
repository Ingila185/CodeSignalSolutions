function solution(a) {
    var  r = new Set()
     for (e of a)
         if (r.has(e))
             return e
         else
             r.add(e)
     return -1
 
 }
 