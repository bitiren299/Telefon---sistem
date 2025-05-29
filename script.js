
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.product button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.closest('.product');
      const name = product.dataset.name;
      const price = product.dataset.price;
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push({ name, price });
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(name + ' sepete eklendi!');
    });
  });
});
