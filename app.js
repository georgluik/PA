// Funktsioonid

// arvu paarsuse kontroll

// funktsiooni defineerimine

/* function funktsiooniNimi(param1, param2, .., paramN){
    funktsioonisisu sisu 
    } 
*/
function paarsuseKontroll(arv){
    
    // arvutame jääk 2-ga jagamisel
    let jaak = arv % 2;
    // kui jaak on võrdne nulliga
    if (jaak === 0){
        // tegu on paaris arvuga
        // tagastame antud väärtus
        lause = arv + ' on paaris';
    }
    else {
        // tegu on paaritu arvuga
        lause = arv + ' on paaritu';
    }
    // tagastame antud väärtus
    return lause;
}


// funktsiooni kasutamine
let paarsus;
paarsus = paarsuseKontroll(5);
console.log(paarsus);

    
