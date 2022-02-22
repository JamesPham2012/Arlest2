import { Room } from 'src/rooms/entities/room.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, OneToOne, JoinColumn, ManyToOne, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';







@Entity()
export class BookingOrder {
    @Column()
    @Generated("uuid")
    uuid : string
    @ManyToOne(type => UserEntity, { primary: true })
    @JoinColumn({ name: "UserID" })
    User: UserEntity;

    @OneToOne(type => Room, { primary: true })
    @JoinColumn({ name: "RoomID" })
    Room:Room;

    assign(room_entity: Room, user_entity: UserEntity) {
        this.User=user_entity;
        this.Room=room_entity;
      }
}