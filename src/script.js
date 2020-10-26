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

    if(text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add text and amount')
    } else {
        const transaction = {
            id: generateId(),
            text: text.value,
            amount: +amount.value,
        }
    }
}

// Generate Id

function generateId() {
    
}