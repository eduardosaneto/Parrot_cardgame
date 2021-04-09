let begin = 0;

function beginGame() {
    begin = parseInt(prompt("Com quantas cartas você quer jogar? "));

    if (begin < 4){
        beginGame();
    } else if (begin > 14){
        beginGame();       
    } else if (begin%2 !== 0){
        beginGame();
    } 
}

beginGame();

