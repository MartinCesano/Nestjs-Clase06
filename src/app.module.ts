import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { entities } from './modules/entities'; 

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '../data/products.db',
    entities: entities,
    synchronize: true,
  }), ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
