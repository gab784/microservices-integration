import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, Unique} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
@Unique(['user'])
export class Author {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column()
  name: string;

  @Column()
  bio: string;

  @Column({ nullable: true })
  quantity: number;

  @OneToOne(() => User, user => user.author )
  @JoinColumn()
  user: User;
}
