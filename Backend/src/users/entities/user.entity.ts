import { BookingOrder } from 'src/bookingorders/entities/bookingorder.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Entity("UserEntity")
export class UserEntity {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  passport: string;

  @CreateDateColumn()
  created_date : Date;

  @OneToMany(type => BookingOrder, order => order.User)
  bookings: BookingOrder[]
}