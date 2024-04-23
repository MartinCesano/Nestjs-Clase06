import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { entities } from './modules/entities'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '../data/products.db',
    entities: entities,
    synchronize: true,
  }), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
