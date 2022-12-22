import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { FeedCategories } from './feedCategory.entity';

@Entity('feeds')
export class Feeds {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'names' })
    name: string;

    @Column('varchar', { name: 'thumbnailUrls' })
    thumbnailUrl: string;

    @Column('varchar', { name: 'descriptions' })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    deletedAt: Date;

    @Column('int', { name: 'FeedCategoryId' })
    feedCategoryId: FeedCategories;
}
