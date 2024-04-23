import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { entities } from './modules/entities'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './modules/brands/brands.module';
import { BrandsController } from './modules/brands/brands.controller';
import { BrandsService } from './modules/brands/brands.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '../data/products.db',
    entities: entities,
    synchronize: true,
  }), ProductsModule, BrandsModule],
  controllers: [AppController, BrandsController],
  providers: [AppService, BrandsService],
})
export class AppModule {}
