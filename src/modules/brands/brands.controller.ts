import { Controller, Get, Query } from '@nestjs/common';
import { brands } from '../../data/brands.db';

@Controller('brands')
export class BrandsController {
    @Get()
    getAllBrands(@Query() filters: any) {
        let filteredBrands = brands;
        if (filters.type) {
            filteredBrands = filteredBrands.filter(brands => brands.name === filters.name);
        }
        return brands;
    }

}
