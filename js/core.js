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

let cardAlreadyFlipped = false;
let interactionLocked = false;
let drawCardAudio = new Audio('../assets/sounds/card_draw_shorter.mp3')

const deckContainer = document.getElementById('cardDeck');

function randomizedDeck() {

    const shuffledDeck = shuffle([...originalDeck]);
    deckContainer.innerHTML = '';


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
        cardDiv.addEventListener('click', () => {
            if (cardAlreadyFlipped || interactionLocked) return;

            interactionLocked = true;

            cardDiv.classList.add('flipped');
            cardAlreadyFlipped = true;
            drawCardAudio.play();

            const value = Number(cardDiv.dataset.number);

            setTimeout(() => {
                // alert(value > 6 ? 'You win!' : 'You lose!');
                if (value > 6) {
                    console.log('Win');
                }
                else {
                    console.log('Lost');
                }

                setTimeout(() => {
                    cardDiv.classList.remove('flipped');
                    drawCardAudio.play();

                    setTimeout(() => {
                        cardAlreadyFlipped = false;
                        interactionLocked = false;
                        randomizedDeck();
                    }, 500);
                }, 900);
            }, 1000);
        });
    });
}

randomizedDeck();