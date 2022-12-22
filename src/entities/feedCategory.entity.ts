import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Feeds } from './feed.entity';

@Entity('feedCategories')
export class FeedCategories {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'name' })
    name: string;

    @OneToMany(() => Feeds, feed => feed.FeedCategory)
    Feeds: Feeds[];
}
