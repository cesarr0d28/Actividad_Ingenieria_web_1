var purchases = JSON.parse(localStorage.getItem('purchases')) || [];

var purchasesContainer = document.getElementById('purchases');

purchases.forEach(function(purchase, index) {
    var purchaseContainer = document.createElement('div');
    purchaseContainer.className = 'purchase-container';

    var purchaseImage = document.createElement('img');
    purchaseImage.src = purchase.image;
    purchaseContainer.appendChild(purchaseImage);

    var purchaseName = document.createElement('span');
    purchaseName.textContent = purchase.name;
    purchaseContainer.appendChild(purchaseName);

    var purchasePrice = document.createElement('span');
    purchasePrice.textContent = '$' + purchase.price;
    purchaseContainer.appendChild(purchasePrice);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = function() {
        purchases.splice(index, 1);
        localStorage.setItem('purchases', JSON.stringify(purchases));
        location.reload();
    };
    purchaseContainer.appendChild(deleteButton);

    purchasesContainer.appendChild(purchaseContainer);
});
