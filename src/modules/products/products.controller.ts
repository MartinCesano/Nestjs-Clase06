import { Controller, Get, Param, Query } from '@nestjs/common';
import { products } from '../../data/products.db';
import { BrandsController } from '../brands/brands.controller';

@Controller('products')
export class ProductsController {
  // Endpoint GET "/products"
  constructor(private brandsService: BrandsController) {}
  @Get()
  getAllProducts(@Query() filters: any) {
    let filteredProducts = products;
    if (filters.type) {
      filteredProducts = filteredProducts.filter(product => product.type === filters.type);
    }
    if (filters.maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= filters.maxPrice);
    }
    if(filters.minPrice){
      filteredProducts = filteredProducts.filter(product => product.price >= filters.minPrice);
    }
    // Verifica la existencia de productos con los filtros ya aplicados y devuelve un mensaje en caso de no encontrar ninguno
    if (filteredProducts.length === 0) {
      return 'No se encontraron productos con los filtros seleccionados.';
    }else{
      let resultado = '';
      // Este ciclo construye una mejor vista de los productos filtrados. No es la mejor manera de ahcerlo 
      for (let i = 0; i < filteredProducts.length; i++) {
        resultado += `ID: ${i} | Nombre: ${filteredProducts[i].name} | Precio: ${filteredProducts[i].price} | Tipo: ${filteredProducts[i].type} | Marca: ${filteredProducts[i].brand} | Color: ${filteredProducts[i].color} | Talle: ${filteredProducts[i].size} <br/>`;
      }
      return resultado;
    }
  }

  // Endpoint GET "/products/:id"
  @Get(':id')
  getProductById(@Param('id') id: string) {
    const i = parseInt(id) - 1;
    let productoSolicitado = products[i];
    // Verifica la existencia del producto solicitado y devuelve un mensaje en caso de no encontrarlo
    if (productoSolicitado === undefined) {
      return (`El producto con id ${id} no existe. Codigo de Error: 404 Not Found`);
    }else{
      return `ID: ${id} | Nombre: ${productoSolicitado.name} | Precio: ${productoSolicitado.price} | Tipo: ${productoSolicitado.type} | Marca: ${productoSolicitado.brand} | Color: ${productoSolicitado.color} | Talle: ${productoSolicitado.size}`;
    }
  }
  @Get(':id/brand')
  getProductBrandById(@Param('id') id: string) {
    const i = parseInt(id) - 1;
    let productoSolicitado = products[i];
    // Verifica la existencia del producto solicitado y devuelve un mensaje en caso de no encontrarlo
    if (productoSolicitado === undefined) {
      return (`El producto con id ${id} no existe. Codigo de Error: 404 Not Found`);
    }else{
      return this.brandsService.getAllBrands(productoSolicitado.brand)
    }
  }



}