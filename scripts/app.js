const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

// puzzleEl.textContent = w1.puzzle
// guessesEl.textContent = w1.statusMessage


window.addEventListener('keypress', function (e) {
    // console.log(e)
    guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle1()
    // console.log(puzzle)
    game1 = new Hangman(puzzle,5)
    render()
}

document.querySelector('#reset').addEventListener('click',() => {
    startGame()
})

startGame()


//CALLBACK Method
// getPuzzle(function(error,puzzle){
//     if(error){
//         console.log(`Error: ${error}`)
//     }
//     else{
//         console.log(puzzle)
//     }
// })

/*Promise Method*/
// getPuzzle().then((puzzle) => {
//     console.log(puzzle)
// }, (err) => {
//     console.log(err)
// })


//FETCH API Method
// getPuzzle().then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(err)
// })

/*USING THE ASYNC AWAIT METHOD*/
// getPuzzle1().then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(err)
// })




// const myCode='IN'
/*CALLBACK METHOD FOR COUNTRY NAMES
getCountry(myCode,function (error,name) {
    if(error){
        console.log(`Error: ${error}`)
    }
    else{
        console.log(name)
    }
})
*/


/*PROMISE METHOD FOR COUNTRY NAMES
getCountry(myCode).then((name)=>{
    console.log(name)
}, (err) => {
    console.log(err)
})
*/

/*FETCH API METHOD FOR COUNTRY NAME AND ASYNC AWAIT*/
// getCountry(myCode).then((name) => {
//     console.log(name)
// }).catch((err) => {
//     console.log(err)
// })




/*FETCH API FOR GEOLOCATION AND ASYNC AWAIT CALL*/
// getGeoLocation().then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })