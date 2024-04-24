import { Injectable, NotFoundException } from '@nestjs/common';
import { brands } from '../../data/brands.db';

@Injectable()
export class BrandsService {
  getBrandByName(name: string): any{
    const brand = brands.find(brand => brand.name === name);
    if (!brand) {
      throw new NotFoundException(`La marca con id ${name} no existe.`);
    }
    return brand;
  }
}