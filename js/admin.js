var products = JSON.parse(localStorage.getItem('products')) || [];

var productsContainer = document.getElementById('products');
var productForm = document.getElementById('product-form');
var nameInput = document.getElementById('name');
var priceInput = document.getElementById('price');
var imageInput = document.getElementById('image');

products.forEach(function(product, index) {
    var productContainer = document.createElement('div');
    productContainer.className = 'product-container';

    var productImage = document.createElement('img');
    productImage.src = product.image;
    productContainer.appendChild(productImage);

    var productName = document.createElement('span');
    productName.textContent = product.name;
    productContainer.appendChild(productName);

    var productPrice = document.createElement('span');
    productPrice.textContent = '$' + product.price;
    productContainer.appendChild(productPrice);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = function() {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        location.reload();
    };
    productContainer.appendChild(deleteButton);

    productsContainer.appendChild(productContainer);
});

productForm.onsubmit = function(e) {
    e.preventDefault();

    var name = nameInput.value;
    var price = priceInput.value;
    var image = imageInput.files[0];

    if (name && price && image) {
        var reader = new FileReader();
        reader.onloadend = function() {
            var product = {name: name, price: Number(price), image: reader.result, available: true};
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));
            location.reload();
        };
        reader.readAsDataURL(image);
    }
};
