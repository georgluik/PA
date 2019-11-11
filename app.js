// Nähtavus

// globaalne
var a = 1;
var b = 2;
const c = 3;

// ploki põhine
if(true){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Plokk: ', a, b, c);
}

for(var a = 0; a < 10; a++){
    console.log('Tsükkel: ', a);
}

// funktsiooni põhine
function testScope(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Funktsioon: ', a, b, c);
}



console.log('Globaalne: ', a, b, c);

     
