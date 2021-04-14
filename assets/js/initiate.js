let initiate = 0;
const ul = document.querySelector("ul");
const imgs = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn'];
const numberOfCards = initiateGame();

// insertCards();

function initiateGame() {
    initiate = parseInt(prompt("Com quantas cartas você quer jogar? "));

    if (initiate < 4 ){
        initiateGame();
    } else if (initiate > 14){
        initiateGame();       
    } else if (initiate%2 !== 0){
        initiateGame();
    }

    return initiate;
}
