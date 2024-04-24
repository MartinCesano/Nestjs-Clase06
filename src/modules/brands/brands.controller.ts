import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get(':id')
  getBrandById(@Param('id') id: string) {
    try {
      const brand = this.brandsService.getBrandByName(id);
      return brand;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}