//элементы popup__card
const popupGeneralCard = document.querySelector('.modal-window_type_general-card');

const popupGeneralCardCloseButton = popupGeneralCard.querySelector('.modal-window__close');

const cardTemplateContent = document.querySelector('.products-card-template').content;

const containerOurProductsCards = document.querySelector('.products__carousel_type_our-products');
const containerSpecialsCards = document.querySelector('.products__carousel_type_specials');

const cardElement = cardTemplateContent.cloneNode(true);

/*const cardTitleElement = cardElement.querySelector('.products-card__title');
const cardImageElement = cardElement.querySelector('.products-card__img');
const cardImageHoverElement = cardElement.querySelector('.products-card__img-hover');
const cardPriceElement = cardElement.querySelector('.products-card__price');
const cardDiscountElement = cardElement.querySelector('.products-card__discount');
const cardOldPriceElement = cardElement.querySelector('.products-card__old-price');
const cardStarsElement = cardElement.querySelector('.products-card__stars');
*/






//функция закрытия popup
function popupClose (popup){
    popup.classList.remove('modal-window_is-opened');
}


//функция открытия popup
function popupOpen (popup){
    popup.classList.add('modal-window_is-opened');
}


//загрузка данных popup__photo
/*
function loadPopupPhotoData(event) {
    imageElement.setAttribute('src', event.target.getAttribute('src'));
    imageElement.setAttribute('alt', event.target.getAttribute('alt'));
    imageTitleElement.textContent = event.target.getAttribute('alt');
}
*/


//обработчик для кнопок внутри карточек

//function setEventListeners(cardElement) {
//    cardElement.querySelector('.card__image').addEventListener('click', () => popupOpen(popupPhotoElement));
 //   cardElement.querySelector('.card__image').addEventListener('click', loadPopupPhotoData);
//}





//создание карточки
function renderCard(name, img, imgHover, price, discount, oldPrice, stars) {
    const cardElement = cardTemplateContent.cloneNode(true);
    const cardTitleElement = cardElement.querySelector('.products-card__title');
    const cardImageElement = cardElement.querySelector('.products-card__img');
    const cardImageHoverElement = cardElement.querySelector('.products-card__img-hover');
    const cardPriceElement = cardElement.querySelector('.products-card__price');
    const cardDiscountElement = cardElement.querySelector('.products-card__discount');
    const cardOldPriceElement = cardElement.querySelector('.products-card__old-price');
    const cardStarsElement = cardElement.querySelector('.products-card__stars');
    const cardStarElements = Array.from(cardStarsElement.querySelectorAll('.products-card__star'));

    cardTitleElement.textContent = name;
    cardImageElement.setAttribute('src', img);
    cardImageElement.setAttribute('alt', name);
    cardImageHoverElement.setAttribute('src', imgHover);
    cardImageHoverElement.setAttribute('alt', name);
    cardPriceElement.textContent = price;

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


    //setEventListeners(cardElement);

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

    const card = renderCard(name, img, imgHover, price, discount, oldPrice, stars);
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

    const card = renderCard(name, img, imgHover, price, discount, oldPrice, stars);
    addCard(containerSpecialsCards, card);
})






