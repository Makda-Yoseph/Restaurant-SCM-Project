fetch("data/menu.json")
.then(res => res.json())
.then(items => {
    const menuDiv = document.getElementById("menu");
    menuDiv.innerHTML = items.map(i => `<p>${i.name} - $${i.price}</p>`).join("");
});

function orderItem(itemName) {
    alert(`Order placed for ${itemName}!`);
}
