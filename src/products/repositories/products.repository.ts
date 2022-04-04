import { Product } from '../entities/product.entity';

class ProductsRepository {
  private products: Product[] = [];
  save(product: Product) {
    this.products.push(product);
  }
}
