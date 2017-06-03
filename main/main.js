"use strict"

module.exports = function main(input) {
  console.log("Debug Info");
  return numberToIcd(input);
};



function numberToIcd(input) {
  var icd =
  [
  {a:'._.', b:'|.|', c:'|_|', k:0},
  {a:'...', b:'..|', c:'..|', k:1},
  {a:'._.', b:'._|', c:'|_.', k:2},
  {a:'._.', b:'._|', c:'._|', k:3},
  {a:'...', b:'|_|', c:'..|', k:4},
  {a:'._.', b:'|_.', c:'._|', k:5},
  {a:'._.', b:'|_.', c:'|_|', k:6},
  {a:'._.', b:'..|', c:'..|', k:7},
  {a:'._.', b:'|_|', c:'|_|', k:8},
  {a:'._.', b:'|_|', c:'..|', k:9}
  ];

  var result = new Array();
  var finalResult = new Array();
  var result1 = new Array();
  var result2 = new Array();
  var result3 = new Array();

  var number = input.split("");

  for(var i = 0; i < number.length; i++) {
    for(var j = 0; j < icd.length; j++) {
      if(icd[j].k == Number(number[i])) {
        result1.push(icd[j].a);
        result2.push(icd[j].b);
        result3.push(icd[j].c);
      }
    }
  }

  result.push(result1.join(" "));
  result.push(result2.join(" "));
  result.push(result3.join(" "));
  result.push("\n");

  var fin = result.join("\n");
  return fin.slice(0,fin.length - 1);

}
