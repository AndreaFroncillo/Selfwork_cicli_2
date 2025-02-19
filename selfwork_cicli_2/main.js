let somma = 0;
let counter = 0;

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }else{
        somma += i
        counter ++
    }
};

console.log(`somma = ${somma}`);
console.log(`counter = ${counter}`);
console.log(`risultato media = ${somma / counter}`);



