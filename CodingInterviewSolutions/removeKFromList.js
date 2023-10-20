//Singly-linked lists are already defined with this interface:
function ListNode(x) {
    this.value = x;
    this.next = null;
  }
 //
 function solution(l, k) {
 let head = l
   let previous = null
 
   while(l){
     if(l.value === k){            
       if(previous===null){
           head = l = l.next
           continue
       } else {
           previous.next = l.next
           l = l.next
           continue
       }
     }
     previous = l
     l = l.next
   }
   return head
 }
 