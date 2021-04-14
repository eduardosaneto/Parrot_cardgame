const correctImgs = shuffleCards(numberOfCards);

function shuffleCards(value){
    const newImgs = [];
    imgs.sort(comparador);

    for(let n = 0; n < value/2; n++) {
        newImgs.push(imgs[n]);
        newImgs.push(imgs[n]);
    }
    newImgs.sort(comparador);
    return newImgs;
}

function comparador() { 
	return Math.random() - 0.5; 
}

shuffleCards(numberOfCards);