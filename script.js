document.addEventListener("DOMContentLoaded", () => {
    const unitOptions = document.querySelectorAll('input[name="unit"]');
    const totalPrice = document.querySelector(".total-price");

    const prices = {
        "1": 10.00,
        "2": 18.00,
        "3": 24.00
    };

    unitOptions.forEach(option => {
        option.addEventListener("change", (e) => {
            const selectedValue = e.target.value;
            totalPrice.textContent = `$${prices[selectedValue].toFixed(2)} USD`;
        });
    });
});
