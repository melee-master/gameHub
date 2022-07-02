const products = [
    {
        _id: '1',
        name: 'Fifa 22',
        image: '/images/fifa22.png',
        description: 'Fifa 22 digital edition. ' +
            'The code will be delivered in 2 hours via E-mail',
        publisher: 'Electronic Arts',
        category: 'Sports',
        price: 3999,
        countInStock: 3,
        rating: 3,
        numReviews: 5
    },
    {
        _id: '2',
        name: 'Call of Duty Vanguard ',
        image: '/images/vanguard.png',
        description: 'Call of Duty Vanguard digital edition. ' +
            'The code will be delivered in 2 hours via E-mail',
        publisher: 'Activision',
        category: 'Action',
        price: 6999,
        countInStock: 3,
        rating: 4.5,
        numReviews: 50
    },
    {
        _id: '3',
        name: 'Call of Duty Black Ops',
        image: '/images/BlackOps.png',
        description: 'Call of Duty Black Ops digital edition. ' +
            'The code will be delivered in 2 hours via E-mail',
        publisher: 'Activision',
        category: 'Action',
        price: 1499,
        countInStock: 3,
        rating: 3.5,
        numReviews: 23
    },
    {
        _id: '4',
        name: 'Farcry-5 ',
        image: '/images/farcry5.png',
        description: 'Farcry-5 digital edition. ' +
            'The code will be delivered in 2 hours via E-mail',
        publisher: 'Ubisoft',
        category: 'Action',
        price: 1499,
        countInStock: 3,
        rating: 2.5,
        numReviews: 1
    },
    {
        _id: '5',
        name: 'NBA2k22',
        image:'/images/NBA2k22.png',
        description: 'NBA2k22 disk edition' +
            'The Disk will be delivered in 3-4 business days',
        publisher: '2K studios',
        category: 'sports',
        price: 799,
        countInStock: 3,
        rating: 2,
        numReviews: 25
    },
    {
        _id: '6',
        name: 'UFC 22',
        image: '/images/UFC22.png',
        description: 'UFC 22 PSP DVD' +
            'The disk will be delivered in 12 hours',
        publisher:'Electronic Arts',
        category: 'Sports',
        price: 1780,
        countInStock: 3,
        rating: 2.5,
        numReviews: 11
    }
]
module.exports = products;
