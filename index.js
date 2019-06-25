let iteration = 1

do{
    console.log(iteration);
    iteration += 5
} while (iteration < 30)

for(let index = 0; index<=40; index+=10){
    console.log(index);   
}

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]

for(let indexa=4; indexa < numbers.length; indexa++){
    const element = numbers[indexa]
    console.log(element);
}