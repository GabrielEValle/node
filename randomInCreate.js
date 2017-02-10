// binary random Integer
// save file as randomInCreate.js
// to run type "node randomInCreate.js"
var randomInteger = function() {
	var ival = Math.random()*256;
	// console.log(ival);
	ival = Math.floor(ival);
	return ival;
}
// main 
var i, rInt ; 
var gev = 2;
for (i = 0; i < 65536; i++){
rInt	= randomInteger();
if (rInt == 2)gev++;
// console.log(rInt+" ");

process.stdout.write(rInt+",");
}
console.log("\n\n Count 2 = "+gev);
