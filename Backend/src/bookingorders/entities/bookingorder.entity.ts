import { Room } from 'src/rooms/entities/room.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, OneToOne, JoinColumn, ManyToOne, Column, PrimaryGeneratedColumn, Generated, BeforeInsert, CreateDateColumn, Check, Exclusion } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';




@Entity()
export class BookingOrder {
    @PrimaryGeneratedColumn("uuid")
    uuid : string

    @Column({nullable:true})
    UserID : number
    
    @Exclude()
    @ManyToOne(type => UserEntity, { primary: true })
    @JoinColumn({ name: "UserID" })
    User: UserEntity;
    
    @Column({nullable:true})
    RoomID : number
    
    @Exclude()
    @ManyToOne(type => Room, { primary: true })
    @JoinColumn({ name: "RoomID" })
    Room:Room;
    
    

    @Column({name: "in_date",type:"timestamptz"})
    check_in_date:Date
    @Column({name: "out_date",type:"timestamptz"})
    check_out_date:Date
    @CreateDateColumn({name:"created_date"})
    date:Date

    
}