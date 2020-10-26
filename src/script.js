const balance = document.getElementById('balance')

const money_plus = document.getElementById('money-plus')

const money_minus = document.getElementById('money-minus')

const list = document.getElementById('list')

const form = document.getElementById('form')

const text = document.getElementById('text')

const amount = document.getElementById('amount')

// Lines 16 and 18 sets up local storage for testing //
const localStorageTransactions = JSON.parse('transactions')

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []

//Add transaction // 

function addTransaction(e) {
    e.preventDefault()

// This is how to add a alert properly instead of my on click alert

    if(text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add text and amount')
    } else {
        const transaction = {
            id: generateId(),
            text: text.value,
            amount: +amount.value,
        }
        transactions.push(transaction)
    }
}

// Generate Id

//The Math.floor() function returns the largest integer less than or equal to a given number. - MDN

//The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user. - MDN

function generateId() {
    return Math.floor(Math.random() * 10000000)
}