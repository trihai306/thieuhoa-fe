import { CartProduct } from '@/types/cart';

export function getCart(): CartProduct[] {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
}
export function getCartTotal() {
  const cart = getCart();
  return cart.length;
}
export function addProductToCart(product: CartProduct) {
  const cart = getCart();
  const index = cart.findIndex((item: CartProduct) => {
    return (
      item.product_id === product.product_id &&
      item.color === product.color &&
      item.size === product.size
    );
  });
  if (index !== -1) {
    cart[index].quantity += product.quantity;
  } else {
    cart.push(product);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}
export function forceUpdateCart(items: CartProduct[]) {
  const dataCart = items.map((item) => {
    return {
      product_id: item.product_id,
      color: item.color,
      size: item.size,
      quantity: item.quantity,
    };
  });
  localStorage.setItem('cart', JSON.stringify(dataCart));
}
