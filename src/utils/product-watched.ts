class ProductWatched {
  getAll() {
    const product_ids = localStorage.getItem('watches');
    if (product_ids) {
      return JSON.parse(product_ids);
    }
    return [];
  }
  push(id: number) {
    const products: number[] = this.getAll();
    let newProducts = [];
    let isSeted = false;
    if (products.indexOf(id) === -1) {
      newProducts = [id, ...products];
      if (products.length >= 12) {
        newProducts = newProducts.slice(0, -1);
      }
      isSeted = true;
    } else {
      newProducts = products.filter((item) => item !== id);
      newProducts = [id, ...newProducts];
      isSeted = true;
    }
    localStorage.setItem('watches', JSON.stringify(newProducts));
    return isSeted;
  }
}
export const productWatched = new ProductWatched();
