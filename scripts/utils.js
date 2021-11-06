//массив начальных карточек our products
const ourProductsCards = [
    {
        name: 'Foramationdi Venkash',
        img: './images/product-1.jpg',
        imgHover: './images/product-2.jpg',
        price: '$122.00',
        discount: '50%',
        oldPrice: '241.99',
        brands: '',
        productCode: 'Sam1',
        rewardPoints: '1000',
        availability: 'Pre-Order',
        exTax: '$100.00',
        stars: 0,
    },

    {
        name: 'Varius Neque At Enim',
        img: './images/product-3.jpg',
        imgHover: './images/product-4.jpg',
        price: '$122.00',
        discount: '',
        oldPrice: '',
        brands: 'APPLE',
        productCode: 'product 20',
        rewardPoints: '',
        availability: 'In Stock',
        exTax: '$100.00',
        stars: 3
    },

    {
        name: 'Suspendisse Massa Nulla',
        img: './images/product-5.jpg',
        imgHover: './images/product-2.jpg',
        price: '$62.00',
        discount: '50%',
        oldPrice: '$122.00',
        brands: 'HEWLETT-PACKARD',
        productCode: 'product 21',
        rewardPoints: '300',
        availability: 'In Stock',
        exTax: '$50.00',
        stars: 0
    },

    {
        name: 'Bhumitationa Centyraon',
        img: './images/product-3.jpg',
        imgHover: './images/product-4.jpg',
        price: '$842.00',
        discount: '30%',
        oldPrice: '$1,202.00',
        brands: 'SONY',
        productCode: 'product 19',
        rewardPoints: '',
        availability: 'In Stock',
        exTax: '$700.00',
        stars: 5
    },

    {
        name: 'Mauris Blandit Vehicula',
        img: './images/product-6.jpg',
        imgHover: './images/product-7.jpg',
        price: '$1000.00',
        discount: '50%',
        oldPrice: '$2000.00',
        brands: 'APPLE',
        productCode: 'product 18',
        rewardPoints: '800',
        availability: 'In Stock',
        exTax: '$1000.00',
        stars: 0
    },

    {
        name: 'Aminatiom Descentation',
        img: './images/product-9.jpg',
        imgHover: './images/product-8.jpg',
        price: '$1,082.00',
        discount: '10%',
        oldPrice: '$1,202.00',
        brands: 'apple',
        productCode: 'product 17',
        rewardPoints: '700',
        availability: 'In Stock',
        exTax: '$900.00',
        stars: 0
    },

    {
        name: 'Tarundecf Beseking',
        img: './images/product-10.jpg',
        imgHover: './images/product-11.jpg',
        price: '$482.00',
        discount: '20%',
        oldPrice: '$602.00',
        brands: 'apple',
        productCode: 'product 16',
        rewardPoints: '600',
        availability: 'In Stock',
        exTax: '$400.00',
        stars: 0
    },

    {
        name: 'Curabitur Dolor Nunc',
        img: './images/product-7.jpg',
        imgHover: './images/product-12.jpg',
        price: '$110.00',
        discount: '10%',
        oldPrice: '$122.00',
        brands: 'apple',
        productCode: 'product 15',
        rewardPoints: '100',
        availability: 'In Stock',
        exTax: '$90.00',
        stars: 0
    },

    {
        name: 'Suspendisse Potenti',
        img: './images/product-13.jpg',
        imgHover: './images/product-8.jpg',
        price: '$122.00',
        discount: '',
        oldPrice: '',
        brands: 'apple',
        productCode: 'product 14',
        rewardPoints: '',
        availability: 'In Stock',
        exTax: '$100.00',
        stars: 0
    },

    {
        name: 'Tellus Eu Volutpat Varius',
        img: './images/product-14.jpg',
        imgHover: './images/product-3.jpg',
        price: '$122.00',
        discount: '1%',
        oldPrice: '$123.20',
        brands: 'HEWLETT-PACKARD',
        productCode: 'product 21',
        rewardPoints: '300',
        availability: 'In Stock',
        exTax: '$50.00',
        stars: 0
    }
];



//массив начальных карточек specials
const specialsCards = [
    {
        name: 'Aminatiom Descentation',
        img: './images/product-9.jpg',
        imgHover: './images/product-8.jpg',
        price: '$1,082.00',
        discount: '10%',
        oldPrice: '$1,202.00',
        brands: 'apple',
        productCode: 'product 17',
        rewardPoints: '700',
        availability: 'In Stock',
        exTax: '$900.00',
        stars: 0
    },

    {
        name: 'Bhumitationa Centyraon',
        img: './images/product-3.jpg',
        imgHover: './images/product-4.jpg',
        price: '$842.00',
        discount: '30%',
        oldPrice: '$1,202.00',
        brands: 'SONY',
        productCode: 'product 19',
        rewardPoints: '',
        availability: 'In Stock',
        exTax: '$700.00',
        stars: 5
    },

    {
        name: 'Cum Sociis Natoque',
        img: './images/product-12.jpg',
        imgHover: './images/product-13.jpg',
        price: '$98.00',
        discount: '20%',
        oldPrice: '$122.99',
        brands: 'canon',
        productCode: 'Product 3',
        rewardPoints: '200',
        availability: 'In Stock',
        exTax: '$80.00',
        stars: 0
    },

    {
        name: 'Curabitur Dolor Nunc',
        img: './images/product-7.jpg',
        imgHover: './images/product-12.jpg',
        price: '$110.00',
        discount: '10%',
        oldPrice: '$122.00',
        brands: 'apple',
        productCode: 'product 15',
        rewardPoints: '100',
        availability: 'In Stock',
        exTax: '$90.00',
        stars: 0
    },

    {
        name: 'Foramationdi Venkash',
        img: './images/product-1.jpg',
        imgHover: './images/product-2.jpg',
        price: '$122.00',
        discount: '50%',
        oldPrice: '241.99',
        brands: '',
        productCode: 'Sam1',
        rewardPoints: '1000',
        availability: 'Pre-Order',
        exTax: '$100.00',
        stars: 0
    },

    {
        name: 'Mauris Blandit Vehicula',
        img: './images/product-6.jpg',
        imgHover: './images/product-7.jpg',
        price: '$1000.00',
        discount: '50%',
        oldPrice: '$2000.00',
        brands: 'APPLE',
        productCode: 'product 18',
        rewardPoints: '800',
        availability: 'In Stock',
        exTax: '$1000.00',
        stars: 0
    },

    {
        name: 'Meghpolo Nepturis',
        img: './images/product-15.jpg',
        imgHover: './images/product-14.jpg',
        price: '$242.00',
        discount: '29%',
        oldPrice: '$337.99',
        brands: 'palm',
        productCode: 'product 12',
        rewardPoints: '',
        availability: 'In Stock',
        exTax: '$100.00',
        stars: 0
    },

    {
        name: 'Suspendisse Massa Nulla',
        img: './images/product-5.jpg',
        imgHover: './images/product-2.jpg',
        price: '$62.00',
        discount: '50%',
        oldPrice: '$122.00',
        brands: 'HEWLETT-PACKARD',
        productCode: 'product 21',
        rewardPoints: '300',
        availability: 'In Stock',
        exTax: '$50.00',
        stars: 0
    },

    {
        name: 'Tarundecf Beseking',
        img: './images/product-10.jpg',
        imgHover: './images/product-11.jpg',
        price: '$482.00',
        discount: '20%',
        oldPrice: '$602.00',
        brands: 'apple',
        productCode: 'product 16',
        rewardPoints: '600',
        availability: 'In Stock',
        exTax: '$400.00',
        stars: 0
    },

    {
        name: 'Tellus Eu Volutpat Varius',
        img: './images/product-14.jpg',
        imgHover: './images/product-3.jpg',
        price: '$122.00',
        discount: '1%',
        oldPrice: '$123.20',
        brands: 'HEWLETT-PACKARD',
        productCode: 'product 21',
        rewardPoints: '300',
        availability: 'In Stock',
        exTax: '$50.00',
        stars: 0
    }
];