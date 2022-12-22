import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('ARs')
export class AR {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'names' })
    name: string;

    @Column('varchar', { name: 'companies' })
    company: string;

    @Column('varchar', { name: 'thumbnailUrls' })
    thumbnailUrl: string;

    @Column('varchar', { name: 'QRurls' })
    QRUrl: string;

    @Column('varchar', { name: 'descriptions' })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    deletedAt: Date;
}
