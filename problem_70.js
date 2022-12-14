/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 1;
    let second = 2; 

    if(n == 1 || n== 0) {
        return 1;
    };

    for(let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third; 
    };
    
    return second;
};