import { Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { products } from '../../data/products.db';
import { BrandsService } from '../brands/brands.service';
import { ProductEntity } from '../entities/product.entity';
import { DeepPartial } from 'typeorm';


@Injectable()
export class ProductsService {
  constructor(private readonly brandsService: BrandsService) {} // Inyecta BrandsService
  reporistory = ProductEntity
  async createProduct(product: DeepPartial<ProductEntity>): Promise<ProductEntity> {
    try{
      return await this.reporistory.save(product)
    }catch(error){
      throw new HttpException('Create Product Error', 500);
    }
  }

  getAllProducts(filters: any): any[] {
    let filteredProducts = products;
    if (filters.type) {
      filteredProducts = filteredProducts.filter(product => product.type === filters.type);
    }
    if (filters.maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= filters.maxPrice);
    }
    if (filters.minPrice) {
      filteredProducts = filteredProducts.filter(product => product.price >= filters.minPrice);
    }
    return filteredProducts;
  }

  getProductById(id: string): string | any {
    const product = products[id] 
    if (!product) {
      throw new NotFoundException(`El producto con id ${id} no existe.`);
    }
    return product;
  }

  getProductBrandById(id: string): any {
    try {
      const brandName = this.getProductById(id).brand;
      const brand =  this.brandsService.getBrandByName(brandName);	
      return { brand };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
