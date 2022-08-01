console.log("Cześć!");

let exchange = document.querySelector(".js-exchange");
let exchangeButton = document.querySelector(".js-exchangeButton");

exchangeButton.addEventListener("click", () => {
    exchange.classList.toggle("js-exchange");
    exchangeButton.innerText = exchange.classList.contains("js-exchange")
        ? "Pokaż aktualne kursy:" : "Ukryj aktualne kursy:"
});

let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let rateEUR = 4.7552;
    let rateUSD = 4.6916;
    let rateCHF = 4.8739;

    switch (currency) {

        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;
    };

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`
});

