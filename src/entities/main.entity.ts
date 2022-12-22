import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('mains')
export class Mainpage {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'case' })
    case: string;

    @Column('varchar', { name: 'brandCount' })
    brandCount: string;

    @Column('varchar', { name: 'totalUser' })
    totalUser: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    deletedAt: Date;
}
