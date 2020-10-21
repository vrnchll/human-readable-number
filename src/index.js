module.exports = function toReadable (number) {

const ones = {
0: "", 1:"one", 2:"two",3: "three", 4:"four", 5:"five", 6: "six", 7:"seven", 8:"eight", 9:"nine"};
const doubleDigits =
{
10: "ten", 11:"eleven", 12:"twelve",13: "thirteen", 14:"fourteen", 15:"fifteen", 16: "sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen",
};
const moreDoubleDig =
{
2: "twenty", 3:"thirty", 4:"forty",5: "fifty", 6:"sixty", 7:"seventy", 8: "eighty", 9:"ninety",
}
number = String(number);
if(number =="0")return "zero";
var counter = String(number).length;
var result = "";
if(counter ==3) {
result += ones[number[0]]!=undefined? ones[number[0]]+" hundred":"";
if(doubleDigits[number[1]+number[2]] !=undefined ){
	result+=" "+doubleDigits[number[1]+number[2]];
	return result;
}
else{
	result+=moreDoubleDig[number[1]]==undefined?"":" "+moreDoubleDig[number[1]];
	result +=ones[number[2]]==undefined?"":" "+ones[number[2]];
}

}
if(counter ==2) {
result +=doubleDigits[number[0]+number[1]] !=undefined ?doubleDigits[number[0]+number[1]]:"";
if(result.length!=0)return result;
result+=moreDoubleDig[number[0]]==undefined?"":moreDoubleDig[number[0]]

result+=" "+ones[number[1]] == undefined?"":" " +ones[number[1]];
}
if(counter == 1) return ones[number[0]];
result = result.trim();
return result;
} 