import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeUpdate,
  Entity,
  OneToMany,
  Unique,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { Author } from '../../authors/entities/author.entity';

import { hash } from 'bcryptjs';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @Column({ name: 'lastName', type: 'varchar', length: 255 })
  lastName: string;

  @Column({ type: 'varchar', length: 255, unique: true  })
  email: string;

  @Column({ type: 'varchar', length: 128, nullable: false, select: false })
  password: string;

  @CreateDateColumn({ name: 'create_at', type: 'timestamp' })
  createAt: Date;

  @OneToOne(() => Author, author => author.user)
  @JoinColumn()
  author: Author;

  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
}
