document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const imageUrl = document.getElementById('imageUrl').value;

    if (name && price && imageUrl) {
        const productContainer = document.getElementById('productContainer');
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.src = imageUrl; // Usamos la URL directamente
        productCard.appendChild(img);
    
        const title = document.createElement('h3');
        title.textContent = name;
        productCard.appendChild(title);
    
        // Crear un contenedor para el precio y el botón de eliminar
        const priceDeleteContainer = document.createElement('div');
        priceDeleteContainer.classList.add('price-delete-container');
    
        const productPrice = document.createElement('p');
        productPrice.textContent = `$${price}`;
        priceDeleteContainer.appendChild(productPrice);
    
        // Crear el botón de eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '🗑️'; // Solo el ícono del tacho
        deleteBtn.style.color = '#5300C8'; // Color púrpura
        deleteBtn.style.fontSize = '24px'; // Ajusta el tamaño del ícono si es necesario
        deleteBtn.style.background = 'none'; // Sin fondo
        deleteBtn.style.border = 'none'; // Sin borde
        deleteBtn.style.cursor = 'pointer'; // Cambia el cursor cuando se pase por encima
        deleteBtn.addEventListener('click', function() {
            productContainer.removeChild(productCard);
        });
    
        priceDeleteContainer.appendChild(deleteBtn);
    
        productCard.appendChild(priceDeleteContainer);
    
        productContainer.appendChild(productCard);
    
        // Limpiar el formulario después de agregar el producto
        document.getElementById('productForm').reset();
    }
    
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('productForm').reset();
});
