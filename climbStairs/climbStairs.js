/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 0 || n === 1) return 1;
    if(n < 0) return 0;
    var current = 1, prev = 1;
    for(var i = 2; i <= n; i ++) {
        var tmp = current + prev;
        prev = current;
        current = tmp;
    }
    return current;
};