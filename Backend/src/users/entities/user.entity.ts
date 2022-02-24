import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Entity("UserEntity")
export class UserEntity {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ unique: true })
  public passport: string;
  @CreateDateColumn()
  @Column({ type: 'timestamptz' })
  created_date : Date;
}