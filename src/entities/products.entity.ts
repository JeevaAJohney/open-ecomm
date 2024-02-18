import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    price!: number;

    @Column()
    category!: string;

    @Column({ nullable: true, default: 0 })
    available_stock?: number;

    @Column({ nullable: true })
    description?: string;
}