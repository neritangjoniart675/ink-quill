// Filename: sophisticated_code.js
// Description: This code demonstrates the implementation of a complex shopping cart system using Object-Oriented Programming (OOP) principles.

// Define the Product class
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Define the ShoppingCart class
class ShoppingCart {
  constructor() {
    this.products = [];
  }
  
  addProduct(id, name, price, quantity) {
    const newProduct = new Product(id, name, price, quantity);
    this.products.push(newProduct);
  }
  
  removeProductById(id) {
    this.products = this.products.filter(product => product.id !== id);
  }
  
  getTotalPrice() {
    let total = 0;
    for (const product of this.products) {
      total += product.getTotalPrice();
    }
    return total;
  }
  
  checkout() {
    // Perform payment processing logic here...
    console.log('Checkout process initiated.');
    console.log(`Total amount: $${this.getTotalPrice()}`);
    console.log('Payment Successful!');
    console.log('Order placed. Thank you for shopping with us!');
  }
}

// Create shopping cart instance
const cart = new ShoppingCart();

// Add products to the cart
cart.addProduct(1, 'Product 1', 10, 2);
cart.addProduct(2, 'Product 2', 15, 1);
cart.addProduct(3, 'Product 3', 5, 3);

// Remove a product from the cart
cart.removeProductById(2);

// Perform checkout
cart.checkout();