function carre(nb){
    return nb*nb;
}

function square(number){
    return Math.pow(number, 2)
}

let sumSquare = square(10);
let sumNatural = 0;

for(let i = 0; i <= 10; i++){
    sumNatural += carre(i);
}

console.log(sumSquare - sumNatural)