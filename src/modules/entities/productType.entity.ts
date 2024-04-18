import {Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity("productType")
export class ProductTypeEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @OneToMany(() => ProductEntity, (product) => product.productType)
    products: ProductEntity[];
}
