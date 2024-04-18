import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  
  // Endpoint GET "/products"
  @Get()
  getAllProducts() {
    // Lógica para obtener todos los productos
    return "Obtener todos los productos";
  }

  // Endpoint GET "/products/:id"
  @Get(':id')
  getProductById(@Param('id') id: string) {
    // Lógica para obtener un producto por ID
    return `Obtener producto con ID: ${id}`;
  }
}