import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  providers: [BrandsService], // Asegúrate de que BrandsService se proporciona aquí
  controllers: [BrandsController],
  exports: [BrandsService], // Exporta BrandsService para que esté disponible en otros módulos
})
export class BrandsModule {}