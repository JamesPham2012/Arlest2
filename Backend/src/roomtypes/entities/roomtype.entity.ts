import { Room } from 'src/rooms/entities/room.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class RoomTypeDetails {
  @PrimaryGeneratedColumn()
  id: number

  @Column()//ermm... this shit is in waht currency again... bah details
  Pricing: number;

  @Column()
  Description: string;

  @OneToMany(type => Room,room => room.RoomType) 
  roomlist:Room[];

  
}