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

let shuffledDeck = shuffle([...originalDeck]);

originalDeck.forEach(card => {
    console.log(`Original number: ${card.number}, Path: ${card.value}`)
})

shuffledDeck.forEach(card => {
  console.log(`Card number: ${card.number}, Path: ${card.value}`);
});