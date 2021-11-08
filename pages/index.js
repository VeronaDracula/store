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
const brandsElement = popupGeneralCard.querySelector('.product-info__list-item-data_type_brands');
const productCodeElement = popupGeneralCard.querySelector('.product-info__list-item-data_type_productCode');
const rewardPointsElement = popupGeneralCard.querySelector('.product-info__list-item-data_type_rewardPoints');
const availabilityElement = popupGeneralCard.querySelector('.product-info__list-item-data_type_availability');
const exTaxElement = popupGeneralCard.querySelector('.product-info__price-tax');
const priceElement = popupGeneralCard.querySelector('.product-info__price-new');
const oldPriceElement = popupGeneralCard.querySelector('.product-info__price-old');
const starsElement = popupGeneralCard.querySelector('.product-info__stars');
const starsArrayElement = Array.from(starsElement.querySelectorAll('.product-info__star'));
const popupMiddleBlock = popupGeneralCard.querySelector('.modal-window__middle-block');
const popupLargeBlock = popupGeneralCard.querySelector('.modal-window__large-block');


//функция закрытия popup
function popupClose (popup){
    popup.classList.remove('modal-window_is-opened');

    for (let i = 0; i < 5; i++) {
        starsArrayElement[i].querySelector('.product-info__star-img').classList.remove('product-info__star-img_active');
    }

    popupMiddleBlock.classList.add('display-none');
    popupLargeBlock.classList.add('display-none');

    $('.zoomContainer').remove();

    document.removeEventListener('keydown', closeByEsc);
}


//функция открытия popup
function popupOpen (popup){
    popup.classList.add('modal-window_is-opened');

    document.addEventListener('keydown', closeByEsc);
}

// закрытие popup по Esc
function closeByEsc(evt) {
    const popupIsOpened = document.querySelector('.modal-window_is-opened');
    if (evt.key === 'Escape') {
        popupClose(popupIsOpened);
    }
}

//закрытие по overlay
function closePopupByClickOverlay(evt) {
    const popupIsOpened = document.querySelector('.modal-window_is-opened');
    if (evt.target === evt.currentTarget){
        popupClose(popupIsOpened);
    }
}


//загрузка данных в модальное окно
function loadPopupPhotoData(event) {
    const cardParentsElement =  event.target.closest('.products-card');

    imageElement.setAttribute('alt', cardParentsElement.querySelector('.products-card__img').getAttribute('alt'));
    imageElement.setAttribute('src', cardParentsElement.querySelector('.products-card__img-zoom').textContent);
    productNameElement.textContent = cardParentsElement.querySelector('.products-card__title').textContent;
    productCodeElement.textContent = cardParentsElement.querySelector('.products-card__product-code').textContent;
    availabilityElement.textContent = cardParentsElement.querySelector('.products-card__availability').textContent;
    exTaxElement.textContent = cardParentsElement.querySelector('.products-card__ex-tax').textContent;
    priceElement.textContent = cardParentsElement.querySelector('.products-card__price').textContent;
    oldPriceElement.textContent = cardParentsElement.querySelector('.products-card__old-price').textContent;


    if (cardParentsElement.classList.contains('card-modal-middle')) {
        popupMiddleBlock.classList.remove('display-none');

    }

    if (cardParentsElement.classList.contains('card-modal-large')) {
        popupLargeBlock.classList.remove('display-none');

    }

    const starsAmount = cardParentsElement.querySelector('.products-card__stars-amount').textContent;

    for (let i = 0; i < starsAmount; i++) {
        starsArrayElement[i].querySelector('.product-info__star-img').classList.add('product-info__star-img_active');
    }


    const cardBrandsData = cardParentsElement.querySelector('.products-card__brands').textContent;
    const cardBrandsBox = popupGeneralCard.querySelector('.product-info__list-item_type_brands');

    if ( cardBrandsData === '') {
        cardBrandsBox.classList.add('display-none');
    }
    else {
        cardBrandsBox.classList.remove('display-none');
        brandsElement.textContent = cardBrandsData;
    }

    const cardRewardPointsData = cardParentsElement.querySelector('.products-card__reward-points').textContent;
    const cardRewardPointsBox = popupGeneralCard.querySelector('.product-info__list-item_type_reward-points');

    if ( cardRewardPointsData === '') {
        cardRewardPointsBox.classList.add('display-none');
    }
    else {
        cardRewardPointsBox.classList.remove('display-none');
        rewardPointsElement.textContent = cardRewardPointsData;
    }


    $('.modal-window__product-img').elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750
    });


}



//обработчик для кнопок внутри карточек
function setEventListeners(cardElement) {
    cardElement.querySelector('.products-card__open-popup').addEventListener('click', () => popupOpen(popupGeneralCard));
    cardElement.querySelector('.products-card__open-popup').addEventListener('click', loadPopupPhotoData);
}





//создание карточки
function renderCard(name, img, imgHover, price, discount, oldPrice, stars, brands, productCode, rewardPoints, availability, exTax, modal, imgZoom) {
    const cardElement = cardTemplateContent.cloneNode(true);
    const cardTitleElement = cardElement.querySelector('.products-card__title');
    const cardImageElement = cardElement.querySelector('.products-card__img');
    const cardImageHoverElement = cardElement.querySelector('.products-card__img-hover');

    const cardImageZoomElement = cardElement.querySelector('.products-card__img-zoom');

    const cardPriceElement = cardElement.querySelector('.products-card__price');
    const cardOldPriceElement = cardElement.querySelector('.products-card__old-price');
    const cardDiscountElement= cardElement.querySelector('.products-card__discount');
    const brandsElement = cardElement.querySelector('.products-card__brands');
    const productCodeElement = cardElement.querySelector('.products-card__product-code');
    const rewardPointsElement = cardElement.querySelector('.products-card__reward-points');
    const availabilityElement = cardElement.querySelector('.products-card__availability');
    const exTaxElement = cardElement.querySelector('.products-card__ex-tax');

    const amountCardStarsElement = cardElement.querySelector('.products-card__stars-amount');

    const cardStarsElement = cardElement.querySelector('.products-card__stars');
    const cardStarElements = Array.from(cardStarsElement.querySelectorAll('.products-card__star'));

    const cardMainElement = cardElement.querySelector('.products-card');


    cardTitleElement.textContent = name;
    cardImageElement.setAttribute('src', img);
    cardImageElement.setAttribute('alt', name);
    cardImageHoverElement.setAttribute('src', imgHover);
    cardImageHoverElement.setAttribute('alt', name);
    cardPriceElement.textContent = price;

    cardImageZoomElement.textContent = imgZoom;
    brandsElement.textContent = brands;
    productCodeElement.textContent = productCode;
    rewardPointsElement.textContent = rewardPoints;
    availabilityElement.textContent = availability;
    exTaxElement.textContent = exTax;
    amountCardStarsElement.textContent = stars;

    if (modal === 'middle') {
        cardMainElement.classList.add('card-modal-middle');
    }

    if (modal === 'large') {
        cardMainElement.classList.add('card-modal-large');
    }

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



//получение данных карточек
function receivingData (cardData, container) {
    cardData.forEach(function (cardData) {
        const name = cardData.name;
        const img = cardData.img;
        const imgHover = cardData.imgHover;
        const price = cardData.price;
        const discount = cardData.discount;
        const oldPrice = cardData.oldPrice;
        const stars = cardData.stars;

        const brands = cardData.brands;
        const productCode = cardData.productCode;
        const rewardPoints = cardData.rewardPoints;
        const availability = cardData.availability;
        const exTax = cardData.exTax;
        const modal = cardData.modal;

        const imgZoom = cardData.imgZoom;

        const card = renderCard(name, img, imgHover, price, discount, oldPrice,
            stars, brands, productCode, rewardPoints, availability, exTax, modal, imgZoom);
        addCard(container, card);
    })
}


receivingData(ourProductsCards, containerOurProductsCards);
receivingData(specialsCards, containerSpecialsCards);

//кнопка закрытия popup
popupGeneralCardCloseButton.addEventListener('click', () => popupClose(popupGeneralCard));

popupGeneralCard.addEventListener('click', closePopupByClickOverlay);