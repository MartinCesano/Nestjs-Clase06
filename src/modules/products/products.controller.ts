import { Controller, Get, Param, Query, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';

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
  
}