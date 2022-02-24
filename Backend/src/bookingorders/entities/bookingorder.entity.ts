import { Room } from 'src/rooms/entities/room.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, OneToOne, JoinColumn, ManyToOne, Column, PrimaryGeneratedColumn, Generated, BeforeInsert } from 'typeorm';
import { Exclude } from 'class-transformer';




/**
 * ,,,,,,,??TWWWWWT?,,,,,,,,,,,,,
?TWHHHHHHHHHHHHHHT,,,,,,,,
?HHHHHHHHHHHHHHHHHHH?,,,
,,,WHW?,,,,,,,,,??WHHHHHHT,,
,,,,,,,,,,,,,,,,,,,,,,,,,,HHHHHHW
,,,,,,,,,,,,,,,,,,,,,,,,,,,?HHHHHH
,,,,,,,,,,,,,,,,,,,,,,,,,,,?HHHHHH
,,,,,,,,,,,,,,,,,,,,,,,,,,?WHHHHW
,,,,,,,,,,,,,,,,,,,,,,,,?WHHHHH??
,,,,,,,,,,,,,,,,,,,,,,THHHHHHT?,,
,,,,,,,,,,,,,,,,,,,THHHHHHW,,,,,
,,,,,,,,,,,,,,,,,WHHHHHW,,,,,,,,
,,,,,,,,,,,,,,WHHHHHT?,,,,,,,,,,,
,,,,,,,,,,,,HHHHHHT,,,,,,,,,,,,,,,
,,,,,,,,,,THHHHHT?,,,,,,,,,,,,,,,,
,,,,,,,,,,WHHHW?,,,,,,,,,,,,,,,,,
,,,,,,,,,THHHHH,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,WHHHH,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,WHHHH,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,??????,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,?THHHHHT,,,,,,,,,,,,,
,,,,,,,,THHHHHHHHW,,,,,,,,,,,,,
,,,,,,,,WHHHHHHHHH,,,,,,,,,,,,,
,,,,,,,,WHHHHHHHHH,,,,,,,,,,,,,
,,,,,,,,,,TWHHHHW?,,,,,,,,,,,,,
 * 
 * 
 */


@Entity()
export class BookingOrder {
    @Column()
    @Generated("uuid")
    uuid : string

    @Exclude()
    @ManyToOne(type => UserEntity, { primary: true })
    @JoinColumn({ name: "UserID" })
    User: UserEntity;
    
    @Exclude()
    @OneToOne(type => Room, { primary: true })
    @JoinColumn({ name: "RoomID" })
    Room:Room;
    
    user_id? : number
    room_id? : number

    @Column()
    date:Date
    constructor(){
        this.date=new Date(Date.now())
    }
    @BeforeInsert()
    fill(){
        this.room_id=this.Room.RoomID
        this.user_id=this.User.UserID
    }
}