var abc = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
var sum = 0;
for (i=0; i < abc.length; i++) {
	sum=sum+abc[i];
}
sum = sum/abc.length
console.log(sum)


var myColor = ["Red", "Green", "White", "Black"];
var allColor = ""
for (i=0; i<myColor.length; i++){
	allColor=allColor+myColor[i]
}
console.log(allColor)



var num="025468";
var str = num.split("");
var result = [str[0]];
console.log(result)
  
for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));




var num="025468";
var str = num.split("");
  
for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      var str.splice(i, null, "8");
     }
    else
     {
      var str.splice(i, null, "");
     }
  }
console.log(str.join(''));



