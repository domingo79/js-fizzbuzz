// Istruzioni:
// Scrivi un programma che stampi i numeri da 1 a 100, 
// ma per i multipli di 3 stampi “Fizz” al posto del numero 
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (let i = 0; i <= 100; i++) {
    var numeri = i;
    if (numeri % 3 == 0 && numeri % 5 == 0) {
        console.log(numeri + ' FizzBuzz');
    } else if (numeri % 3 == 0) {
        console.log(numeri + ' Fizz');
    } else if (numeri % 5 == 0) {
        console.log(numeri + ' Buzz');
    } else console.log(numeri)
}
