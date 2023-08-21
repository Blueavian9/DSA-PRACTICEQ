/*
Given a string sequence consisting of the 
characters: `(`, `)`, `[`, `]`, `{`, and
`}`. Your task is to determine whether or not
the sequence is a valid bracket sequence.

The VALID bracket sequence is defined in the
following way: 

   ** An empty bracket sequence is a valid
      bracket sequence. 

   ** If s is a valid bracket sequence then (s). [s] and {s} are also valid. 

   ** If A and B are valid bracket sequences
      then AB is also valid.


EXAMPLE 

** For sequence = "()". the output should
be solution (sequence) = true

** For sequence = "()[]{}" the output
should be solution(sequence) = true

** For sequence = "{]", the output should
be solution(sequence) = false;

** For sequence = "{[)]", the output
should be solution(sequence) = false;

** For sequence = "{[]}", the output 
should be  solution(sequence) = true.
*/

/* Input/ Output

    *[execution time limit] 4 seconds (js)

    *[input] string sequence

    A bracket sequence, consisting of the 
    characters (, ), [, ], {, and }.

    Guaranteed constraints: 
    0 <= sequence.length <= 10 to the sixth power.

    **[output] boolean

    true if sequence is a valid bracket
    sequence and false otherwise.

    [Script] Syntax Tips

*/

// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedListStack {
//   constructor() {
//     this.head = null;
//   }
//   push(value) {
//     let n = new ListNode(value);
//     n.next = this.head;
//     this.head = n;
//   }

//   pop() {
//     if (this.head === null) {
//       return undefined;
//     }

//     let old_head = this.head;
//     this.head = this.head.next;

//     old_head.next = null;

//     return old_head.value;
//   }

//   isEmpty() {
//     return this.head === null;
//   }
// }
// class ArrayStack {
//   constructor() {
//     this.stack = [];
//   }
// }
// push(value);
// {
//   constructor();
//   {
//     this.stack = [];
//   }

//   push(value);
//   {
//     this.stack.push(value);
//   }

//   pop();
//   {
//     return this.stack.pop();
//   }
// }
// function solution(sequence) {
//   // let stack = [];
//   //  let stack = new ArrayStack();
//   let stack = new LinkedListStack();

//   let match_map = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   // Go through all the characters
//   for (let c of sequence) {
//     // If it's an open character
//     if (["(", "[", "{"].includes(c)) {
//       // push it on the stack
//       stack.push(c);
//     } else {
//       // Find the matching character
//       let match_char = match_map[c];

//       // pop the stack
//       let c2 = stack.pop();

//       if (c2 !== match_char) return false;

//       // make sure the characters match
//     }
//   }

//   return stack.isEmpty();
// }






class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
  }
  push(value) {
    let n = new ListNode(value);
    n.next = this.head;
    this.head = n;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }
    let old_head = this.head;
    this.head = this.head.next;

    old_head.next = null;

    return old_head.value;
  }

  isEmpty() {
    return this.head === null;
  }
}
class ArrayStack {
  constructor() {
    this.stack = [];
  }
}
push(value);
{
  constructor();
  {
    this.stack = [];
  }

  push(value);
  {
    this.stack.push(value);
  }

  pop();
  {
    return this.stack.pop();
  }
}

function solution(sequence) {
  // let stack = [];
  // let stack = new ArrayStack();
  let stack = new LinkedListStack();

  let match_map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
}
//Go through all the characters
for (let c of sequence) {
  //If it's an open character
  if (["(", "[", "{"].includes(c));
  {
    //push it on the stack
    stack.push(c);
  }
  // Find the matching character
  let match_char = match_map[c];

  //pop the stack
  let c2 = stack.pop();

  if (c2 !== match_char) return false;

  // make sure the characters match
}

return stack.isEmpty();
