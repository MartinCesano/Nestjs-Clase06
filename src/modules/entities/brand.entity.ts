import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, OneToMany} from 'typeorm';
import { IBrandEntity } from 'src/data/interfaces.db';
import { IProductEntity } from 'src/data/interfaces.db';
import { ProductEntity } from './product.entity';

@Entity("brands") 
export class BrandEntity extends BaseEntity implements IBrandEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    type: string;
    @Column()
    country: string;
    @OneToMany(() => ProductEntity, (product) => product.brand)
    products: IProductEntity[];
}