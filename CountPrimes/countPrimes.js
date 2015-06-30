/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	var count = 0;
	for (var i = 2; i < n; i++) {
		if (isPrime(i)) {count++;}
	}
    return count;
};


function isPrime (x) {
	if (x < 2) {return false;}
	for (var i = 2; i * i <= x; i++) {
		if (x % i === 0) {return false;}
	}
	return true;
}