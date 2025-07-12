//Electronics Shopping Cart
let cart = [];
// Function to add a gadget
function addProduct(name, price, qty) {
  cart.push({ name, price, qty });
}
function removeProduct(name) {
  cart = cart.filter(item => item.name !== name);
}
function showCart() {
  console.log("\n🔌 Electronics Cart Summary:");
  cart.forEach(item => {
    console.log(`${item.name} - ₹${item.price} x ${item.qty} = ₹${item.price * item.qty}`);
  });
}
// Function to calculate total price with GST
function calculateTotal(taxRate = 0.18) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  console.log(`\nSubtotal: ₹${subtotal.toFixed(2)}`);
  console.log(`GST (18%): ₹${tax.toFixed(2)}`);
  console.log(`Total: ₹${total.toFixed(2)}`);
}
addProduct("Wireless Mouse", 599, 1);
addProduct("Bluetooth Headphones", 1999, 1);
addProduct("USB-C Charger", 849, 2);
showCart();
calculateTotal();
removeProduct("USB-C Charger");
showCart();
calculateTotal();
