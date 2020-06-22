import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../auth/user.entity';

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  imgSrc: string;

  @Column()
  genre: string;

  @Column({type: 'real'})
  rating: string;

  @Column({type: 'real'})
  price: string;

  @Column({type: 'simple-array'})
  gallery: string[];

  @Column()
  publisher: string;

  @Column()
  developer: string;

  @Column({type: 'real'})
  size: number;

  @Column()
  age: number;

  @Column()
  category: string;

  @Column()
  date: Date;

  @Column()
  discountPrice: number;

  @ManyToOne(type => User, user => user.games, { eager: false })
  user: User;
}
