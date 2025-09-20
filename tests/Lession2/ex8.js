/*
for (let i = 1; i <= 100; i+=4){
        console.log(i);
} 
*/

/* In trên một dòng */
const numbers = [];
for (let i = 1; i <= 100; i += 4) {
    numbers.push(i);
}
console.log(numbers.join(", "));
