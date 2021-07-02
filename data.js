module.exports = function () {
    return {
        products: [
            { id: 1, name: "Air Zoom Pegasus 38", category: "Nike Running Shoes",
                description: "Nike Air Zoom Pegasus 38 Womens Running Shoes", price: 275 },
            { id: 2, name: "Fresh Foam Roav", category: "New Balance Running Shoes",
                description: "New Balance Fresh Foam Roav Womens Running Shoes", price: 48.95 },
            { id: 3, name: "Classic Leather", category: "Sneakers",
                description: "Reebok Classic Leather Womens Casual Shoes", price: 19.50 }
        ],
        orders: [
            {
                id: 1, name: "John", zip: 0000,
                cart: {
                    lines: [
                        {                            
                            quantity: 1,
                            product: { name: "Air Zoom Pegasus 38" }                            
                        },
                        {                            
                            quantity: 2,
                            product: { name: "Classic Leather" }                            
                        }
                    ]
                }
            },
            {
                id: 2, name: "Smith", zip: 0000,
                cart: {
                    lines: [
                        {                            
                            quantity: 1,
                            product: { name: "Air Zoom Pegasus 38" }                            
                        }
                    ]
                }
            }            
        ]
    }
}