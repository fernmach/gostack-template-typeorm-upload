import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Category from './Category';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  type: 'income' | 'outcome';

  @Column('decimal')
  value: number;

  @Column()
  category_id: string;

  @ManyToOne(() => Category, category => category.transaction, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<Transaction>) {
    Object.assign(this, partial);
  }
}

export default Transaction;
