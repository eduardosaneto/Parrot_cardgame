function insertCards(){

    for(let n = 0; n < correctImgs.length; n++){
        ul.innerHTML += `
        <li class="cards">
            <img class="card-back" src="assets/images/front.png" alt="">
            <img class="card-front" src="assets/images/${correctImgs[n]}parrot.gif" alt="">
        </li>
        `;
    }    
}

insertCards();