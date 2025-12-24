function placeOrder() {
    const selected = document.getElementById("food").value;
    const result = document.getElementById("result");

    let orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const priceMap = {
        "Burger": 5.99,
        "Pizza": 8.49,
        "Pasta": 6.79,
        "French Fries": 3.50,
        "Salad": 4.20,
        "Coke": 1.99,
        "Ice Cream": 2.99
    };
    orders.push({item: selected, quantity: 1, price: priceMap[selected]});
    localStorage.setItem("orders", JSON.stringify(orders));

    result.innerText = `Order placed for ${selected}. Thank you for your order!`;
    console.log("Orders:", orders);
}