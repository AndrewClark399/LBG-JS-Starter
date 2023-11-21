let car = ["mk1",  "mk2", "merc", "scorp"]

console.log(car);

console.log(car[0]);
console.log(car[1]);
console.log(car[2]);
console.log(car[3]);

car.push ("scorp estate");
console.log(car);
car.pop ();
console.log(car)
car.unshift ("jag");
console.log(car)
car.shift ();
console.log(car)
car.push ("scorp estate");
console.log(car)
car.splice (3, 0, "merc estate");
console.log(car)
console.log(car.length);
console.log (car[car.length - 1]);
car[car.length] = "volvo";
console.log(car);
console.log(car.length);
console.log(typeof car);

let num = ;

if (typeof num !== 'number') {
    console.log("NotANumber");
}
else if (num % 2 === 0) {
   console.log("Even"); 
}
else {
    console.log("Odd");
}