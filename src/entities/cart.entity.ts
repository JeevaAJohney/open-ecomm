import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class cart {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    user_id!: string;

    @Column()
    product_id!: string;

    @Column({ nullable: true })
    quantity?: number;
}