import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity} from 'typeorm';
import { ProductTypeEntity } from './productType.entity';
import { IProductEntity } from 'src/data/interfaces.db';
import { IProductTypeEntity } from 'src/data/interfaces.db';
import { IBrandEntity } from 'src/data/interfaces.db';
import { BrandEntity } from './brand.entity';


@Entity("products")
export class ProductEntity extends BaseEntity implements IProductEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    price: number;
    @ManyToOne( () => BrandEntity, (brand) => brand.products)
    brand: IBrandEntity[];
    @Column()
    color: string;
    @Column()
    size: string;
    @ManyToOne(() => ProductTypeEntity, (productType) => productType.products)
    productType: IProductTypeEntity[];
}
