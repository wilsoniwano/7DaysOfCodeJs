const addProductForm = document.querySelector('#add-product-form');
const nameInput = document.querySelector('#name');
const categorySelect = document.querySelector('#category');
let shoppingListSection = document.querySelector('#shopping-list');
let groupedList = [];
let shoppingList = [];

function addProduct(event) {
    if(nameInput.value !== '') {
        event.preventDefault();
        const id = Math.random().toString(16).slice(2);
        const name = nameInput.value;
        const category = categorySelect.value;
    
        shoppingList.push(
            {
                id: id,
                name: name,
                category: category
            }
        )
    }

    renderList();
}

function removeProduct(productId) {
    let canRemove = confirm('Deseja remover este produto da lista?');

    if(canRemove === true) {
        let filteredList = shoppingList.filter((item) => {
            return productId !== item.id;
        })
    
        shoppingList = filteredList;
    
        renderList();
    }
}

function groupByCategory() {
    groupedList = [];

    shoppingList.forEach((product) => {
        let index = groupedList.map(obj => obj.category).indexOf(product.category);
    
        if(index >= 0) {
            groupedList[index].products.push({
                id: product.id,
                name: product.name
            });
        } else {
            groupedList.push(
                {
                    category: product.category,
                    products: [{
                        id: product.id,
                        name: product.name
                    }]
                }
            )
        }
    })
}

function showList() {
    shoppingListSection.innerHTML = '';
    
    groupedList.map((item) => {
        shoppingListSection.innerHTML += `
            <h2>${item.category}</h2>
            <ul>
                ${item.products.map((item) => `
                    <li>
                        <span>${item.name}</span>
                        <button class="delete" title="Excluir" aria-label="Excluir" onclick="removeProduct('${item.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </li>`).join('')}
            </ul>
        `;
    })
}

function renderList() {
    groupByCategory();
    showList();
    
    nameInput.value = '';
    nameInput.focus();
}