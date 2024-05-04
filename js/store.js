var products = JSON.parse(localStorage.getItem('products')) || [];

var productsContainer = document.getElementById('products');

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

    if (product.available) {
        var buyButton = document.createElement('button');
        buyButton.textContent = 'Comprar';
        buyButton.onclick = function() {
            products[index].available = false;
            var purchases = JSON.parse(localStorage.getItem('purchases')) || [];
            purchases.push(product);
            localStorage.setItem('purchases', JSON.stringify(purchases));
            localStorage.setItem('products', JSON.stringify(products));
            alert('Compraste ' + product.name);
            location.reload();
        };
        productContainer.appendChild(buyButton);
    } else {
        var soldOutLabel = document.createElement('span');
        soldOutLabel.textContent = 'Agotado';
        productContainer.appendChild(soldOutLabel);
    }

    productsContainer.appendChild(productContainer);
});
