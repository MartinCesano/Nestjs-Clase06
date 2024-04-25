import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { entities } from './modules/entities'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './modules/brands/brands.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '../data/products.db',
    entities: entities,
    synchronize: true,
  }), ProductsModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
