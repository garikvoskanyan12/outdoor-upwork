export default () => ({
  products: [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet. Non sunt quaerat vel',
      price: '$1,500',
      count: 1,
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet. Non sunt quaerat vel',
      price: '$1,500',
      count: 1,
    },
  ],
  changeCount(btn, productId) {
    const btnType = btn.getAttribute('data-cart');
    if (btnType === 'increment') {
      this.products.find((product) => product.id === productId).count++;
    } else if (
      btnType === 'decrement' &&
      this.products.find((product) => product.id === productId).count === 1
    ) {
      return;
    } else {
      this.products.find((product) => product.id === productId).count--;
    }
  },
  deleteItem(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  },
});
