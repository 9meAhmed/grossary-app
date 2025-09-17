var groceryList = [
  { name: "Milk 00", quantity: 1 },
  { name: "Bread", quantity: 2 },
];

function renderItem(item, index) {
  return `
    <li class="list-group-item">
        <span class="item-name">${item.name}</span>
        <div class="pull-right">
            <button class="btn btn-sm" onClick="decreaseQuantity('${index}')"><span class="glyphicon glyphicon-minus"></span></button>
            <span class="quantity">${item.quantity}</span>
            <button class="btn btn-sm" onClick="increaseQuantity('${index}')"><span class="glyphicon glyphicon-plus"></span></button>
            <button class="btn btn-sm btn-danger" onClick="removeItem('${index}')">
                <span class="glyphicon glyphicon-trash"></span>
            </button>
        </div>
    </li>
    `;
}

function renderList() {
  const listContainer = document.getElementById("grocery-list");
  listContainer.innerHTML = groceryList
    .map((item, index) => renderItem(item, index))
    .join("");
}

function decreaseQuantity(index) {
  if (groceryList[index].quantity > 1) {
    groceryList[index].quantity--;
  } else {
    groceryList.splice(index, 1);
  }
  renderList();
}

function increaseQuantity(index) {
  groceryList[index].quantity++;
  renderList();
}

function removeItem(index) {
  groceryList.splice(index, 1);
  renderList();
}

renderList();
