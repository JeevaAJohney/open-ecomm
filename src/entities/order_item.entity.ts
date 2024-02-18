import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    order_id!: string;

    @Column()
    product_id!: string;

    @Column({ nullable: true })
    quantity?: number;
}