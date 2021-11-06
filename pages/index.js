//элементы popup__card
const popupGeneralCard = document.querySelector('.modal-window_type_general-card');

const popupGeneralCardCloseButton = popupGeneralCard.querySelector('.modal-window__close');

const cardTemplateContent = document.querySelector('.products-card-template').content;

const containerOurProductsCards = document.querySelector('.products__carousel_type_our-products');
const containerSpecialsCards = document.querySelector('.products__carousel_type_specials');

const cardElement = cardTemplateContent.cloneNode(true);


//данные модального окна
const imageElement = popupGeneralCard.querySelector('.modal-window__product-img');
const productNameElement = popupGeneralCard.querySelector('.product-info__title');
const productCodeElement = popupGeneralCard.querySelector('.product-info__list-item-data_type_productCode');
const rewardPointsElement = popupGeneralCard.querySelector('.product-info__list-item-data_type_rewardPoints');
const availabilityElement = popupGeneralCard.querySelector('.product-info__list-item-data_type_availability');
const exTaxElement = popupGeneralCard.querySelector('.product-info__price-tax');
const priceElement = popupGeneralCard.querySelector('.product-info__price-new');
const oldPriceElement = popupGeneralCard.querySelector('.product-info__price-old');








//функция закрытия popup
function popupClose (popup){
    popup.classList.remove('modal-window_is-opened');
}


//функция открытия popup
function popupOpen (popup){
    popup.classList.add('modal-window_is-opened');
}


//загрузка данных popup__photo

function loadPopupPhotoData(event) {
    const cardParentsElement =  event.target.closest('.products-card');

    imageElement.setAttribute('src', cardParentsElement.querySelector('.products-card__img').getAttribute('src'));
    imageElement.setAttribute('alt', cardParentsElement.querySelector('.products-card__img').getAttribute('alt'));
    productNameElement.textContent = cardParentsElement.querySelector('.products-card__title').textContent;

    productCodeElement.textContent = cardParentsElement.querySelector('.products-card__product-code').textContent;
    rewardPointsElement.textContent = cardParentsElement.querySelector('.products-card__reward-points').textContent;

    availabilityElement.textContent = cardParentsElement.querySelector('.products-card__availability').textContent;
    exTaxElement.textContent = cardParentsElement.querySelector('.products-card__ex-tax').textContent;
    priceElement.textContent = cardParentsElement.querySelector('.products-card__price').textContent;
    oldPriceElement.textContent = cardParentsElement.querySelector('.products-card__old-price').textContent;


}



//обработчик для кнопок внутри карточек

function setEventListeners(cardElement) {
    cardElement.querySelector('.products-card__open-popup').addEventListener('click', () => popupOpen(popupGeneralCard));
    cardElement.querySelector('.products-card__open-popup').addEventListener('click', loadPopupPhotoData);
}





//создание карточки
function renderCard(name, img, imgHover, price, discount, oldPrice, stars, brands, productCode, rewardPoints, availability, exTax /*modal*/) {
    const cardElement = cardTemplateContent.cloneNode(true);
    const cardTitleElement = cardElement.querySelector('.products-card__title');
    const cardImageElement = cardElement.querySelector('.products-card__img');
    const cardImageHoverElement = cardElement.querySelector('.products-card__img-hover');
    const cardPriceElement = cardElement.querySelector('.products-card__price');
    const cardOldPriceElement = cardElement.querySelector('.products-card__old-price');
    const cardDiscountElement= cardElement.querySelector('.products-card__discount');
    const brandsElement = cardElement.querySelector('.products-card__brands');
    const productCodeElement = cardElement.querySelector('.products-card__product-code');
    const rewardPointsElement = cardElement.querySelector('.products-card__reward-points');
    const availabilityElement = cardElement.querySelector('.products-card__availability');
    const exTaxElement = cardElement.querySelector('.products-card__ex-tax');

    const cardStarsElement = cardElement.querySelector('.products-card__stars');
    const cardStarElements = Array.from(cardStarsElement.querySelectorAll('.products-card__star'));

    //const cardQQ = cardElement.querySelector('.products-card');


    cardTitleElement.textContent = name;
    cardImageElement.setAttribute('src', img);
    cardImageElement.setAttribute('alt', name);
    cardImageHoverElement.setAttribute('src', imgHover);
    cardImageHoverElement.setAttribute('alt', name);
    cardPriceElement.textContent = price;

    brandsElement.textContent = brands;
    productCodeElement.textContent = productCode;
    rewardPointsElement.textContent = rewardPoints;
    availabilityElement.textContent = availability;
    exTaxElement.textContent = exTax;

    //if (modal === 'ok') {
     //   cardQQ.classList.add('card-modal');

    //}

    if (discount === '') {
        cardDiscountElement.classList.add('display-none');
    }
    else {
        cardDiscountElement.textContent = discount;
    }

    if (oldPrice === '') {
        cardOldPriceElement.classList.add('display-none');
    }
    else {
        cardOldPriceElement.textContent = oldPrice;
    }

    for (let i = 0; i < stars; i++) {
        cardStarElements[i].querySelector('.products-card__star-img').classList.add('products-card__star-img_active');
    }


    setEventListeners(cardElement);

    return cardElement;
}



//добавление карточек в контейнер

function addCard (container, cardElement){
    container.appendChild(cardElement);
}



//получение данных из коллекции our products
ourProductsCards.forEach(function (ourProductsCards) {
    const name = ourProductsCards.name;
    const img = ourProductsCards.img;
    const imgHover = ourProductsCards.imgHover;
    const price = ourProductsCards.price;
    const discount = ourProductsCards.discount;
    const oldPrice = ourProductsCards.oldPrice;
    const stars = ourProductsCards.stars;

    const brands = ourProductsCards.brands;
    const productCode = ourProductsCards.productCode;
    const rewardPoints = ourProductsCards.rewardPoints;
    const availability = ourProductsCards.availability;
    const exTax = ourProductsCards.exTax;
    //const modal = ourProductsCards.modal;

    const card = renderCard(name, img, imgHover, price, discount, oldPrice, stars, brands, productCode, rewardPoints, availability, exTax/*modal*/);
    addCard(containerOurProductsCards, card);
})


//получение данных из коллекции specials
specialsCards.forEach(function (specialsCards) {
    const name = specialsCards.name;
    const img = specialsCards.img;
    const imgHover = specialsCards.imgHover;
    const price = specialsCards.price;
    const discount = specialsCards.discount;
    const oldPrice = specialsCards.oldPrice;
    const stars = specialsCards.stars;

    const brands = specialsCards.brands;
    const productCode = specialsCards.productCode;
    const rewardPoints = specialsCards.rewardPoints;
    const availability = specialsCards.availability;
    const exTax = specialsCards.exTax;

    const card = renderCard(name, img, imgHover, price, discount, oldPrice, stars, brands, productCode, rewardPoints, availability, exTax);
    addCard(containerSpecialsCards, card);
})





//кнопка закрытия popup
popupGeneralCardCloseButton.addEventListener('click', () => popupClose(popupGeneralCard));