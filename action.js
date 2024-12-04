 let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr =localStorage.getItem('bagItems');
    bagItems =bagItemsStr ? JSON.parse(bagItemsStr):[];
    displayItemsOnHomePage()
    displayBagIcon();
}
 function addTOBag(itemid) {
    bagItems.push(itemid); 
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcon(); 
}

function displayBagIcon() {
    let bagItemCount = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCount.style.visibility = 'visible';
        bagItemCount.innerText = bagItems.length;
    } else {
        bagItemCount.style.visibility = 'hidden';
    }
}

 function displayItemsOnHomePage(){
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
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
    let innerHTML='';
    items.forEach(item => {
        innerHTML +=`<div class="item-container">
                <img src="${item.item_image}" alt="image" class="item-image">
                <div class="rating">
                    ${item.rating.star} ⭐ |${item.rating.noOfReviews}
                </div>
                <div class="company-name">${item.company_name}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">₹${item.current_price}</span>
                    <span class="original-price">${item.original_price}</span>
                    <span class="discount">${item.discount_price}%off</span>
                </div>
               <button class="btn-add-bag" onClick="addTOBag('${item.id}')">Add to Bag</button>

            </div>`
    })
    itemsContainerElement.innerHTML = innerHTML;
     }
