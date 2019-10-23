// muutujad

// var
var nimi = 'Georg'; // defineerimine
console.log(nimi);
nimi = 'Jok'; // väärtuse omistamine
console.log(nimi);

// muutujate initsialiseerimine
var tervitus;
console.log(tervitus);
tervitus = 'Tere tulemast';
console.log(tervitus);

// liitnimede kasutamine
var eesNimi = 'Georg'; // Camel Stiil
var ees_nimi = 'Georg'; // PHP Stiil
var EesNimi = 'Georg'; // Pascal Stiil
var eesnimi = 'Georg';

// let - muutuja
let pereNimi = 'Luik';
console.log(pereNimi);
pereNimi = 'Luk';
console.log(pereNimi);

// const - konstant
const minuEesNimi = 'Georg';
console.log(minuEesNimi);


// const kasutamise näide
const inimene = {nimi : 'Georg', vanus : 10};
console.table(inimene);
inimene.vanus = 11;
console.table(inimene);

const arvud = [1, 2, 3, 4, 5];
console.log(arvud);
arvud.push(6);
console.log(arvud);
