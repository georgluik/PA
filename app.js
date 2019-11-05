// Funktsioonid

// arvu paarsuse kontroll

// funktsiooni defineerimine
/* function funktsiooniNimi(param1, param2, .., paramN){
    funktsioonisisu sisu 
    } 
*/
function paarsuseKontroll(){


    // defineerime suvaline täisarv
    let arv = 7;
    // arvutame jääk 2-ga jagamisel
    let jaak = arv % 2;
    // kui jaak on võrdne nulliga
    if (jaak === 0){
        // tegu on paaris arvuga
        console.log(arv + ' on paaris');
    }
    else {
        // tegu on paaritu arvuga
        console.log(arv + ' on paaritu')
    }
}


// funktsiooni kasutamine
paarsuseKontroll();

    
