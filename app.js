// Funktsioonid

// arvu paarsuse kontroll

// funktsiooni defineerimine

/* function funktsiooniNimi(param1, param2, .., paramN){
    funktsioonisisu sisu 
    } 
*/
// funktsioon mis arvutab ristküliku pindala
function ristkylikuPindala(pikkus, laius){
    

    // arvutame pindala
    let pindala = pikkus * laius;
    
    // väljastame pindala põhiprogrammi
    return pindala;
}

// funktsioon mis väljastab tulemuse ekraanil
function valjasta(pikkus, laius){
    // väljastame väärtused
    console.log('pikkus = ' + pikkus);
    console.log('laius = ' + laius);
    // salvestame arvutatud pindala
    let pindala = ristkylikuPindala(pikkus,laius);
    // väljastame tulemus
    console.log('pindala = ' + pindala);
}

valjasta(15, 5);

    
