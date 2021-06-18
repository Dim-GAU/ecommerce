import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "Dim",
            email: "dim@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: "John",
            email: "john@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }

    ],

    products: [
        {
            name:'Product 1',
            category:'Shirts',
            image:'./p1.jpg',
            price:120,
            countInStock: 10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Product 2',
            category:'Shirts',
            image:'./p2.jpg',
            price:100,
            countInStock: 20,
            brand:'Adidas',
            rating:2.4,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Product 3',
            category:'Shirts',
            image:'./p3.jpg',
            price:220,
            countInStock: 0,
            brand:'Lacoste',
            rating:4.8,
            numReviews:17,
            description:'high quality product',
        },
        {
            name:'Product 4',
            category:'Pants',
            image:'./p4.jpg',
            price:78,
            countInStock: 15,
            brand:'Nike',
            rating:4.5,
            numReviews:14,
            description:'high quality product',
        },
        {
            name:'Product 5',
            category:'Pants',
            image:'./p5.jpg',
            price:65,
            countInStock: 5,
            brand:'Puma',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Product 6',
            category:'Pants',
            image:'./p6.jpg',
            price:139,
            countInStock: 12,
            brand:'Adidas',
            rating:4.5,
            numReviews:15,
            description:'high quality product',
        },
    ]
}

export default data;