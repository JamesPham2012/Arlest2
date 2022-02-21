import { Room } from 'src/rooms/entities/room.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';







@Entity()
export class BookingOrder {
    @ManyToOne(type => UserEntity, { primary: true })
    @JoinColumn({ name: "UserID" })
    User: UserEntity;

    @OneToOne(type => Room, { primary: true })
    @JoinColumn({ name: "RoomID" })
    Room:Room;

  
}