const newdata = JSON.parse(data);
console.log(newdata);

const divcontentelement = document.querySelector('.content');
newdata.forEach(element => {
    divcontentelement.insertAdjacentHTML('beforeend', `
        <div class="wraper">
            <div class="image-container">
                <img src="${element.img}" alt="${element.name}">
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <h2>${element.name}</h2>
            <h3>${element.discription}</h3>
            <p>${element.price}</p>
        </div>
    `);
});

// Добавляем стили для карточек
const style = document.createElement('style');
style.textContent = `
    .content {
        display: flex;
        flex-wrap: wrap;
        margin: -10px;
    }
    .wraper {
        position: relative;
        display: flex;
        flex-direction: column;
        width: calc(33.33% - 20px);
        margin: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        box-sizing: border-box;
    }
    .image-container {
        position: relative;
        width: 100%;
    }
    .image-container img {
        display: block;
        width: 100%;
        height: auto;
    }
    .add-to-cart {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #28a745;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 16px;
        opacity: 0;
        transition: opacity 0.3s;
    }
    .image-container:hover .add-to-cart {
        opacity: 1;
    }
    h2, h3, p {
        margin: 10px 0;
    }
`;

document.head.appendChild(style);

// Слушатель события для кнопки "Add to Cart"
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
      const productWrapper = event.target.closest('.wraper');
      const productName = productWrapper.querySelector('h2').textContent;
      const productPrice = productWrapper.querySelector('p').textContent;
      
      // Создаем элемент корзины
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span class="cart-item-name">${productName}</span>
        <span class="cart-item-price">${productPrice}</span>
        <button class="remove-from-cart">❌</button>
      `;
      
      // Добавляем товар в раздел "Cart items"
      const cartItemsContainer = document.querySelector('.cart-items');
      cartItemsContainer.appendChild(cartItem);
      
      // Показываем раздел "Cart items"
      document.querySelector('.cart').style.display = 'block';
    }
  });
  
  // Слушатель события для кнопок удаления товаров из корзины
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-from-cart')) {
      const cartItem = event.target.closest('.cart-item');
      cartItem.remove();
      
      // Если все товары удалены, скрываем раздел "Cart items"
      const cartItems = document.querySelectorAll('.cart-item');
      if (cartItems.length === 0) {
        document.querySelector('.cart').style.display = 'none';
      }
    }
  });
  