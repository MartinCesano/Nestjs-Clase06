import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { DeepPartial } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(@Query() filters: any) {
    return this.productsService.getAllProducts(filters);
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Get(':id/brand')
  getProductBrandById(@Param('id') id: string) {
    return this.productsService.getProductBrandById(id);
  }
  
  @Post()
  async createProduct(@Body() product: DeepPartial<ProductEntity>): Promise<ProductEntity> {
    return await this.productsService.createProduct(product);
  }
}