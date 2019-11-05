// Funktsioonid

// arvu paarsuse kontroll

// funktsiooni defineerimine

/* function funktsiooniNimi(param1, param2, .., paramN){
    funktsioonisisu sisu 
    } 
*/
// funktsioon mis arvutab ristküliku pindala
function ristkylikuPindala(pikkus, laius){
    // väljastame väärtused
    console.log('pikkus = ' + pikkus);
    console.log('laius = ' + laius);

    // arvutame pindala
    let pindala = pikkus * laius;
    
    // väljastame pindala põhiprogrammi
    return pindala;
}

rPindala = ristkylikuPindala(15, 5);
console.log('pindala = ' + rPindala);



    
