/* 
Question 1: Array Manipulation

Given an array a, your task is to output an array b of the same length by applying the following tranfromation: 
- For each i from 0 to a.length - 1 inclusive, b[i] = a[i - 1] + a[i] + a[i + 1]
-if an element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, use 0 in its place
-For instance b[0] = 0 + a[0] + a[i]

Example

For a = [4, 0, 1, -2, 3]:
- b[0] = 0 + a[0] + a[1] = 0 +  4 + 0 = 4
-b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
-b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
-b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
-b[4] = a[3] + a[4] + 0 = ( -2) + 3 + 0 = 1

So the output should be solution(a) = [4, 5, -1, 2, 1].
*/

/*
Python
def solution(a):
    b = []
    for i in Range(len(a));
    # If it's the first element, use 0 as the value for a[i - 1]
    if i == 0:
    b.append(0 + a[i] + a[i + 1])
    # If it's the last element, use 0 as the value for a[i + 1]
    elif i == len(a) - 1;
    b.append(a[i - 1] + a[i] + 0)
    # Otherwise, use the values of a[i - 1], a[i], and a[i + 1]
    else:
    b.append(a[i - 1] + a[i] + a[i + 1])
    return b
    
*/

// JavaScript 
function solution(a) {
    const b = [];
    for (let i = 0; i < a.length; i++) {
        if (i == 0) {
            b.push(0 + a[i] + a[i + 1]);
        } else if (i === a.length - 1) {
            b.push(a[i -1] + a[i] + 0);
        } else {
            b.push(a[i -1] + a[i] + a[i + 1]);
        }
    }
    return b;
}

// Example Usage
const a = [4, 0, 1, -2, 3];
console.log(solution(a)); // Expected Output: [4, 5, -1, 2, 1]



