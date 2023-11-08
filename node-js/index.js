// console.log("Hello World");

// 1 euro = 5,23 reais



const current = (value, coin) => {
    let exchangeRate = {
        EUR: 0.19,
        AUD: 0.32,
        USD: 0.20
    }

    console.log(`${coin} ${ (value * exchangeRate[coin]).toFixed(2)} BRL${value}`)
}

current(20, 'AUD')