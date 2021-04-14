const cards = document.querySelectorAll('.cards');
let firstCard = null;
let nextCard = null;

function flipCard() {
    
    let cardFlipped = this.classList.contains('flipCard');

    this.classList.add('flipCard');

    if(cardFlipped) {    
        firstCard = this;
    }
    else {
        nextCard = this;
        console.log(cardFlipped, firstCard, nextCard)
        if(firstCard.innerHTML !== nextCard.innerHTML){
            firstCard.classList.remove('flipCard');
            nextCard.classList.remove('flipCard');
        }
    }   
}

for(let n = 0; n < cards.length; n++){
    cards[n].addEventListener('click', flipCard);
}
