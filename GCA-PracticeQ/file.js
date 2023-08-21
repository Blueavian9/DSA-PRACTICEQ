/*
Simply-linked lists are already defined with this interface:
function ListNode(x) {
    this.value = x;
    this.next = null;
}

*/

/*
DESCRIPTION

Given the "head" of a linked list, a new value, and an "index"
to insert before, make a new node with the given "value" and insert it in the list before the given "index"file.js

if the "index" is less than or equal to zero, the new node will be inserted at the head of the list.

if the "index" is greater than or equal to the length of the existing list the new node should be appended on the end of the list.

Otherwise, the new node will be inserted into the list before the given index.


The index is zero-based. 

You'll have to construct a new ListNode to hold the value. 

Your solution should be O(n). And your should be able to do it with a single pass through the list.

Example: 

a)
head: 1 -> 2 -> 3
value: 99
index: 1

result: 1 -> 99 -> 2 -> 3

b)
head: 1 -> 2 -> 3 
value: 99
index: 0

result: 99 -> 1 -> 2 -> 3

c)
head: 1 -> 2 -> 3
value: 99
index: 234712

result: 1 -> 2 -> 3 -> 99

d)
head: null 
value: 99
index: [any value]

result: 99
*/

function solution(head, value, index) {}
