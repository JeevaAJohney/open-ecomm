import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orders {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    user_id!: string;

    @Column({ nullable: true })
    total_price?: number;

    @Column({ nullable: true })
    status?: string;

    @Column({ nullable: true })
    shipping_address?: string;

    @CreateDateColumn()
    order_date?: Date;
}