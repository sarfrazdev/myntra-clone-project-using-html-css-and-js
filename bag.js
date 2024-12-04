const CONVENIENCE_FEES = 99;
let bagItemObjects;

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary() {
  const bagSummaryElement = document.querySelector('.bag-summary');

  const totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  const finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
      <div class="price-header">PRICE DETAILS (${totalItem} Items)</div>
      <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹${totalMRP}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹${CONVENIENCE_FEES}</span>
      </div>
      <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹${finalPayment}</span>
      </div>
    </div>
    <button class="btn-place-order">
      <div class="css-xjhrni">PLACE ORDER</div>
    </button>
  `;
}
const items = [
    {
        id: '001',
        item_image: '1.jpg',
        company_name: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_price: 42,
        return_period: 14,
        // delivery_date: '10 Oct 2023',
        rating: {
            star: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        item_image: '2.jpg',
        company_name: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_price: 42,
        return_period: 14,
        // delivery_date: '10 Oct 2023',
        rating: {
            star: 4.3,
            noOfReviews: 24,
        },
    },
    {
        id: '003',
        item_image: '3.jpg',
        company_name: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_price: 69,
        return_period: 14,
        // delivery_date: '10 Oct 2023',
        rating: {
            star: 4.1,
            noOfReviews: 249,
        },
    },
    {
        id: '004',
        item_image: '4.jpg',
        company_name: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        // delivery_date: '10 Oct 2023',
        rating: {
            star: 5.0,
          noOfReviews: 10,
        },
    },
    {
        id: '005',
        item_image: '5.jpg',
        company_name: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_price: 65,
        return_period: 14,
        // delivery_date: '10 Oct 2023',
        rating: {
            star: 4.2,
            noOfReviews: 3500,
        },
    },
    {
        id: '006',
        item_image: '6.jpg',
        company_name: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_price: 0,
        return_period: 14,
        // delivery_date: '10 Oct 2023',
        rating: {
            star: 0.0,
            noOfReviews: 0,
        },
    },
    {
        id: '007',
        item_image: '7.jpg',
        company_name: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_price: 60,
        rating: {
            star: 4.2,
            noOfReviews: 388,
        },
    },
    {
        id: '008',
        item_image: '8.jpg',
        company_name: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_price: 50,
        return_period: 14,
        // delivery_date: '10 Oct 2023',
        rating: {
            star: 4.2,
            noOfReviews: 5200,
        },
    }
];

function loadBagItemObjects() {
  bagItemObjects = bagItems.map(itemId => {
    return items.find(item => item.id === itemId);
  });
}

// pop up message 
function showMessage(message) {
  let messageElement = document.createElement('div');
  messageElement.className = 'message-popup';
  messageElement.innerText = message;

  document.body.appendChild(messageElement);

  // Automatically remove the message after 3 seconds
  setTimeout(() => {
    document.body.removeChild(messageElement);
  }, 3000);
}
function addToBag(itemId) {
  if (!bagItems.includes(itemId)) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();

    // Show the "added" message
    // showMessage('Product added to bag!');
  }
}




function displayBagItems() {
  const containerElement = document.querySelector('.bag-items-container');

  const innerHTML = bagItemObjects.map(bagItem => generateItemHTML(bagItem)).join('');

  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) { 
  bagItems = bagItems.filter(bagItemId => bagItemId !== itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon(); 
  displayBagItems();
  displayBagSummary();

   // Show the "removed" message
   showMessage('Product removed from bag!');
}

function generateItemHTML(item) {
  return `
    <div class="bag-item-container">
      <div class="item-left-part">
        <img class="bag-item-img" src="../${item.item_image}" alt="${item.item_name}">
      </div>
      <div class="item-right-part">
        <div class="company">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
          <span class="current-price">₹${item.current_price}</span>
          <span class="original-price">₹${item.original_price}</span>
          <span class="discount-percentage">(${item.discount_price}% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">${item.return_period} days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
      </div>
      <div class="remove-from-cart" onclick="removeFromBag('${item.id}')">X</div>
    </div>`;
}
