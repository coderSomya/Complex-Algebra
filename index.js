const complexFunctions = require("./utilities.js");
const prompt = require("prompt-sync")();


console.log("Available functions: \n1:print\n 2:conjugate\n 3:modulus\n 4:add\n 5:subtract\n 6:multiply\n 7:divide\n 8:argument\n");

var choice=(Number)(prompt("enter key for function    "));


switch (choice){
  case 1:
     var z=prompt("enter real and imaginary part of complex number");
     var Z=z.split(",");
     complexFunctions.print(Z);
     break;
  case 2:
    var z=prompt("enter real and imaginary part of complex number");
    var Z=z.split(",");
    var zz =complexFunctions.conjugate(Z);
    complexFunctions.print(zz);
    break;
  case 3:
    var z=prompt("enter real and imaginary part of complex number");
    var Z=z.split(",");
    var zz =complexFunctions.modulus(Z);
    console.log(zz);
    break;
  case 4:
    var z1= prompt("enter real and imaginary part of first complex number").split(",");
    var z2= prompt("enter real and imaginary part of second complex number").split(",");
    
    var z3=[Number(z1[0]), Number(z1[1])];
    var z4=[Number(z2[0]), Number(z2[1])];

    var zz= complexFunctions.add(z3,z4);
    complexFunctions.print(zz);
    break;
  

    
   default:
     console.log("invalid key");
}