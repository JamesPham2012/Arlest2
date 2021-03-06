
import { BookingOrder } from 'src/bookingorders/entities/bookingorder.entity';
import { RoomTypeDetails } from 'src/roomtypes/entities/roomtype.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CreateRoomDto } from '../dto/create-room.dto';

@Entity()
export class Room {

  @PrimaryGeneratedColumn()
  RoomID: number;

  @Column({ default: true })
  isVacant: boolean;
  
  @ManyToOne(type => RoomTypeDetails, room =>room.roomlist) 
  @JoinColumn({name:"RoomType"})// naming convention for table 
  RoomType:RoomTypeDetails;     // naming of variable for OOP 

  @OneToMany(type => BookingOrder, order => order.Room)
  OrderList: BookingOrder[]
}