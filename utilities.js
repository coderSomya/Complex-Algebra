function print(Z){
    if(Z[1]<0) console.log(`${Z[0]}-${Z[1]*-1}i`)
    else console.log(`${Z[0]}+${Z[1]*1}i`)
}

function add(z1,z2){
    let z= [z1[0]+z2[0], z1[1]+z2[1]];

    return z;
}

function subtract(z1,z2){
    let z= [z1[0]-z2[0], z1[1]-z2[1]];

    return z;
}

function multiply(z1,z2){
    let z= [z1[0]*z2[0]- z1[1]*z2[1], z1[0]*z2[1]+z1[1]*z2[0]];
    return z;
}


function conjugate(Z){
    let z=[Z[0], -Z[1]];
    return z;
}

function modulus(Z){
    return Math.sqrt(Z[0]*Z[0]+Z[1]*Z[1]);
}


function divide(z1,z2){
    let z3=[z2[0]/modulus(z2), -z2[1]/modulus(z2)];
    return multiply(z1,z3);
}


function argument(Z){

    let angle= Math.atan(Math.abs(Z[1]/Z[0]));

    if(Z[0]>=0 && Z[1]>=0){
        return angle;
    }
    else if(Z[0]<0 && Z[1]>0){
      return Math.PI-angle;
    }
    else if(Z[0]<0 && Z[1]<0){
        return -Math.pi+angle;
    }
    else{
       return -angle;
    }
}



module.exports={
   print,
   add,
   subtract, 
   multiply, 
   modulus, 
   divide, 
   conjugate,
   argument
}