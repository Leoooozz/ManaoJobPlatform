import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JobOffer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    description: string;

    @Column()
    company: string;

    @Column('date')
    publication_date: Date;

    @Column() 
    status: string;

}
