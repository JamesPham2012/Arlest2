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

    @Column()
    date:Date
    constructor(){
        this.date=new Date(Date.now())
    }
}