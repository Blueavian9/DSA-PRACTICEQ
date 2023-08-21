// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//  this.value = x;
//  this.next = null;
//  }
function solution(head, value, index) {
  // Insert on an empty list
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }

  // n    head
  // v    v
  // 99 -> 1 -> 2 -> 3
  // Insert at the head of the list
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }

  //                v
  //      p          c
  // 1 -> 2 -> 99 -> 3 -> 4
  //
  // prev.next = new_node
  // new_node.next = cur

  // Insert in the middle of the list
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }

  // Insert at the tail of the list
  prev.next = n;

  return head;
}

function solution(head, value, index) {
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }

  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;

    return n;
  }

  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }

  prev.next = n;

  return head;
}

function solution(head, value, index) {
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }

  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;

    return n;
  }

  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }

  prev.next = n;

  return head;
}

function solution(head, value, index) {
  if (head == hull) {
    let n = new ListNode(value);
    return n;
  }

  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }

  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }

  prev.next = n;

  return head;
}

function solution(head, value, index) {
  if (head === null) {
    let n = new ListNode(value);
    return n;
  }

  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }

  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }

  prev.next = n;

  return head;
}

function solution(head, value, index) {
  if (head === null) {
    let n = new ListNode(value);
    return n;
  }

  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }

  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }

  prev.next = n;

  return head;
}

function solution(head, value, index) {
  if (head === null) {
    let n = new ListNode(value);
    return n;
  }

  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }

  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }

  prev.next = n;

  return head;
}

function solution(head, value, index) {
  if (head === null) {
    let n = new ListNode(value);
    return n;
  }

  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }

  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;
      cur_index++;
    }

    prev.next = n;

    return head;
  }
}

function solution(head, value, index) {
  let n = new ListNode(value);

  // Insert on an empty list
  if (head == null) {
    return n;
  }

  // Insert at the head of the list
  if (index == 0) {
    n.next = head;
    return n;
  }

  // Insert in the middle of the list
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }

  // Insert at the tail of the list
  prev.next = n;

  return head;
}

//    Plan:
function solution(head, value, index) {
  let n = new ListNode(value);
  //   1. Insert on an empty list.
  if (head == null) {
    return n;
  }
  //   2. Insert at the head of the list
  if (index == 0) {
    n.next = head;
    return n;
  }

  //   3. Insert in the middle of the list
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }

  // 4. Inert at the tail of the list
  prev.next = n;

  return head;
}

//  Solution-Plan:
function solution(head, value, index) {
  let n = new ListNode(value);
  //  1. Insert on an empty list.
  if (head == null) {
    return n;
  }
  //  2. Insert at the head of the list.
  if (index == 0) {
    n.next = head;
    return n;
  }
  //  3. Insert in the middle  of the list.
  let prev = head;
  let cur = head;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }

  // 4. Insert at the tail of the list.
  prev.next = n;

  return head;
}

//    Solution-Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }

  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }
  // 4. Insert at tht tail of the list.
  prev.next = n;

  return head;
}

function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n;

  return head;
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n;

  return head;
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n;

  return head;
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n;

  return head;
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n;

  return head;
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n;

  return head;
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n;
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head;
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n;

  return head;
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null){
    let n = new ListNode(value);
    return n; 
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head; 
    return n; 
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next; 
  let cur_index = 1; 

  while (cur != null) {
    if (cur_index == index) {
        prev.next = n;
        n.next = cur;

        return head; 
    }

    prev = prev.next;
    cur = cur.next; 
    cur_index++; 
  }
  // 4. Insert at the tail of the list.
  prev.next = n;

  return head; 
}

// Plan:
function solution(head, value, index) {
  // 1.  Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;

    return n; 

  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next; 
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
        prev.next = n;
        n.next = cur; 

        return head; 
    }

        prev = prev.next; 
        cur = cur.next; 
        cur_index++;
    }  
    // 4. Insert at the tail of the list.
    prev.next = n;

    return head; 
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  // 2. Insert at the head of the list.
  // 3. Insert in the middle of the list.
  // 4. Insert at the tail of the list.
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  // 2. Insert at the head of the list.
  // 3. Insert in the middle of the list.
  // 4. Insert at the tail of the list.
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  // 2. Insert at the head of the list.
  // 3. Insert in the middle of the list.
  // 4. Insert at the tail of the list.
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  // 2. Insert at the head of the list.
  // 3. Insert in the middle of the list.
  // 4. Insert at the tail of the list.
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  // 2. Insert at the head of the list.
  // 3. Insert in the middle of the list.
  // 4.  Insert at the tail of the list.
}

// PLan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  // 2. Insert at the head of the list.
  // 3. Insert in the middle of the list.
  // 4. Insert at the tail of the list.
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  // 2. Insert at the head of the list.
  // 3. Insert in the middle of the list.
  // 4. Insert at the tail of the list.
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  // 2. Insert at the head of the list.
  // 3. Insert in the middle of the list.
  // 4. Insert at the tail of the list.
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  // 2. Insert at the head of the list.
  // 3. Insert in the middle of the list.
  // 4. Insert at the tail of the list.
}

// Plan:
function solution(head, value, index) {
// 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head; 
    return n; 
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next;
  let cur_index = 1;

  while (cur != null) {
    if (cur_index == index) {
      prev.next = n;
      n.next = cur;

      return head; 
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n;

  return head;
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head;
    return n; 
  }
  // 3. Insert in the middle of the list.
  let prev = head; 
  let cur = head.next; 
  let cur_index = 1; 

  while  (cur != null) {
    if (cur_index == index) {
        prev.next = n;
        n.next = cur;

        return head;
    }

    prev = prev.next;
    cur = cur.next; 
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n; 

  return head; 
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head; 
    return n; 
  }
  // 3. Insert in the middle of the list.
  let prev = head; 
  let cur = head.next; 
  let cur_index = 1; 

  while (cur != null) {
    if (cur_index == index) {
        prev.next = n; 
        n.next = cur; 

        return head; 
    }

    prev = prev.next; 
    cur = cur.next; 
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n; 

  return head; 
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value);
    return n; 
  }
  // 2. Insert at the head of the list.
  if (index == 0 ) {
    let n = new ListNode(value);
    n.next = head; 
    return n; 
  }
  // 3. Insert in the middle of the list.
  let prev = head;
  let cur = head.next;
  let cur_index = 1; 

  while (cur != null) {
    if (cur_index == index) {
        prev.next = n; 
        n.next = cur; 

        return head; 
    }

    prev = prev.next;
    cur = cur.next;
    cur_index++;
  }
  // 4. Insert at the tail of the list.
  prev.next = n; 

  return head; 
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
    if (head == null) {
        let n = new ListNode(value);
        return n; 
    }
    // 2. Insert at the middle of the list.
    if (index == 0) {
        let n = new ListNode(value);
        n.next = head;
        return n; 
    }
    // 3. Insert in the middle of the list.
    let prev = prev.head;
    let cur = cur.next;
    let cur_index = 1; 

    while (cur != null) {
        if (cur_index == index) { 
            prev.next = n; 
            n.next = cur; 

            return head; 
        }

        prev = prev.next;
        cur = cur.next; 
        cur_index++; 
    }
    // 4. Insert at the tail of the list.
    prev.next = n; 

    return head; 
}

// Plan:
function solution(head, value, index) {
  // 1. Insert on an empty list.
  if (head == null) {
    let n = new ListNode(value); 
     return n ;
  }
  // 2. Insert at the head of the list.
  if (index == 0) {
    let n = new ListNode(value);
    n.next = head; 
    return n; 
  }
  // 3. Insert in the middle of the list.
  let prev = head; 
  let cur = head.next;
  let cur_index = 1; 

  while (cur != null) { 
    if (cur_index == index) {
        prev.next = n; 
        n.next = cur; 
        
        return head; 
    }
    prev = prev.next;
    cur = cur.next; 
    cur_index++; 
  }
  // 4. Insert at the tail of the list.
  prev.next = n; 

  return head; 
}




// Link List Insert

function solution(head, value, index) {
   // Insert on an empty list
    if (head == null) {
        let n = new ListNode(value);
        return n ;
    }
    // Insert at head of the list
    if (index == 0) {
        let n = new ListNode(value);
        n.next = head; 

        return n; 
    }
    // Insert in the middle of the list 
    let prev = head;
    let cur = head.next;
    let cur_index = 1; 

    while (cur != null) {
        if (cur_index == index) { 
            prev.next = n;
            n.next = cur;

            return head; 
        }

        prev = prev.next;
        cur =  cur.next;
        cur_index++;
    }
    // Insert at the tail of the list 
    prev.next = n; 

    return head; 
}





// Plan:
function solution(head, value, index) { 
// 1. Insert on an empty list
    if (head == null) {
        let n = new ListNode(value); 
        return n; 
    }
    // 2. Insert at the head of the list 
    if (index == 0) { 
        let n = new ListNode(value);
        n.next = head;

        return n; 
    }
    // 3. Insert in the middle of the list 
    let prev = head; 
    let cur = next.head;
    let cur_index = 1; 

    while (cur != null) {
        if (cur_index == index) {
            prev.next = n; 
            n.next = cur; 
            
            return head; 
        } 
            prev = prev.next;
            cur = cur.next; 
            cur_index++; 
        }
        // 4. Insert at the tail of the list 
        prev.next = n; 

        return head; 
    }









































































