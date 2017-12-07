//Cynthia Cheng
//SoftDev Pd09
//Work15

const estudiantes = ["Sara", "Tahsin", "Farah", "David", "Stewart", "Cynthia", "Brandon", "Giorgio"];

var fibonacci = function(n) {
	if (n <= 1) {
    return n;
  }
	return fibonacci(n-1) + fibonacci(n-2);
}

var gcd = function(a,b){
  if (b == 0) {
    return a;
  }
  else {
    return gcd(b, a % b);
  }
}

var randStudent = function() {
    var r = Math.floor(Math.random() * estudiantes.length);
    return estudiantes[r];
}

console.log(fibonacci(1));
console.log(fibonacci(7));
console.log(gcd(120,72));
console.log(gcd(432908,94));
console.log(randStudent());
