class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    calculateStatus() {
        let finished = true
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
            }
            else
                finished = false
        })
        if (this.remainingGuesses === 0)
            this.status = 'failed'
        else if (finished)
            this.status = 'finished'
        else
            this.status = 'playing'
    }

    get statusMessage() {
        if (this.status === 'playing')
            return `Guesses Left: ${this.remainingGuesses}`
        else if (this.status === 'failed')
            return `Nice Try! The word was "${this.word.join('')}".`
        else
            return 'Great Work!! You guessed the word.'
    }

    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ')
                puzzle += letter
            else
                puzzle += '*'
        })
        return puzzle
    }

    makeGuess(guess) {
        if (this.status !== 'playing')
            return
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (isUnique)
            this.guessedLetters.push(guess)
        if (isUnique && isBadGuess)
            this.remainingGuesses--

        this.calculateStatus()
    }
}

// const Hangman = function (word,remainingGuesses) {
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = []
//     this.status = 'playing'
// }

// Hangman.prototype.getPuzzle = function () {
//     let puzzle = ''
//     this.word.forEach((letter) => {
//         if(this.guessedLetters.includes(letter) || letter === ' ')
//             puzzle += letter
//         else
//             puzzle += '*'
//     })
//     return puzzle
// }

// Hangman.prototype.makeGuess = function (guess) {
//     if(this.status !== 'playing')
//         return
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess)
//     const isBadGuess = !this.word.includes(guess)
//     if(isUnique)
//         this.guessedLetters.push(guess)
//     if(isUnique && isBadGuess)
//         this.remainingGuesses--

//     this.calculateStatus()
// }


// Hangman.prototype.getStatusMessage = function () {
//     if(this.status === 'playing')
//         return `Guesses Left: ${this.remainingGuesses}`
//     else if(this.status === 'failed')
//         return `Nice Try! The word was "${this.word.join('')}".`
//     else 
//         return 'Great Work!! You guessed the word.'
// }


// Hangman.prototype.calculateStatus = function () {
//     let finished = true
//     this.word.forEach((letter) =>{
//         if(this.guessedLetters.includes(letter))
//         {

//         }
//         else
//             finished = false
//     })
//     if(this.remainingGuesses === 0)
//         this.status = 'failed'
//     else if(finished)
//         this.status = 'finished'
//     else
//         this.status = 'playing'
// }

