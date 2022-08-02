{
    const welcome = () => {
        console.log("Cześć!");
    };

    const toggleCurrency = () => {
        const exchange = document.querySelector(".js-exchange");
        const themeNameButtonCurrency = document.querySelector(".js-themeNameButtonCurrency");
        exchange.classList.toggle("exchange");
        themeNameButtonCurrency.innerText = exchange.classList.contains("exchange")
            ? "Pokaż" : "Ukryj"
    };

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.7552;
        const rateUSD = 4.6916;
        const rateCHF = 4.8739;

        switch (currency) {

            case "EUR":
                return amount / rateEUR;


            case "USD":
                return amount / rateUSD;


            case "CHF":
                return amount / rateCHF;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const exchangeButton = document.querySelector(".js-exchangeButton");
        exchangeButton.addEventListener("click", toggleCurrency);

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    welcome();
    init();
}
