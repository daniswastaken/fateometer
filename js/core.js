const originalDeck = [
    { number: 0, value: 'num0' },
    { number: 1, value: 'num1' },
    { number: 2, value: 'num2' },
    { number: 3, value: 'num3' },
    { number: 4, value: 'num4' },
    { number: 5, value: 'num5' },
    { number: 7, value: 'num7' },
    { number: 8, value: 'num8' },
    { number: 9, value: 'num9' },
    { number: 10, value: 'num10' },
    { number: 11, value: 'num11' },
    { number: 12, value: 'num12' },
];


function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

const shuffledDeck = shuffle([...originalDeck]);

const deckContainer = document.getElementById('cardDeck');

shuffledDeck.forEach((card, index) => {
    // Create card container
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', `card${index}`);

    // Build inner card HTML
    cardDiv.innerHTML = `
    <div class="card-inner">
        <div class="value card-face card-back">
            <img src="./assets/cards/${card.value}.svg">
        </div>
        <div class="cover card-face card-front">
            <img src="./assets/cards/cover.svg">
        </div>
    </div>
  `;

    // Add card to the container
    deckContainer.appendChild(cardDiv);

    // Get the data number from card
    cardDiv.dataset.number = card.number;

});

let cardAlreadyFlipped = false;
let drawCardAudio = new Audio('../assets/sounds/card_draw.mp3')

// Compare and detect click
document.querySelectorAll('.card').forEach(card => {

    // Click function
    card.addEventListener('click', () => {
        if (cardAlreadyFlipped) return; // block if one is already flipped

        card.classList.add('flipped');
        cardAlreadyFlipped = true;
        drawCardAudio.play();

        // Get the card's value from dataset (it’s a string, convert to number)
        const value = Number(card.dataset.number);

        setTimeout(() => {
            if (value > 6) {
                window.alert('You win!');
            } else {
                window.alert('You lose!');

            }
            window.location.reload();
        }, 700); // wait 700ms
    });
});