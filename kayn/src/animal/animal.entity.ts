import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  espece: string;

  @Column()
  nom: string;

  @Column({ nullable: true })
  age: number;
}
