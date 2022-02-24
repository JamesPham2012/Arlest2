import { async } from "rxjs";
import { Room } from "src/rooms/entities/room.entity";
import { RoomsService } from "src/rooms/rooms.service";
import { UserEntity } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";
import { Connection, Entity, EntityManager, EntityRepository, Repository, Transaction } from "typeorm";
import { CreateBookingorderDto } from "./dto/create-bookingorder.dto";
import { UpdateBookingorderDto } from "./dto/update-bookingorder.dto";
import { BookingOrder } from "./entities/bookingorder.entity";




@EntityRepository(BookingOrder)
export class BookingOrderRepository extends Repository<BookingOrder>{
    async findOneUUID(id: string) {
        return await this.findOne({uuid:`${id}`});
    }
    async addBooking(userid,roomid,connection:Connection){
        try{
            return await connection.manager.transaction(async entityManager => {
                const room_entity:Room=await entityManager.findOne(Room,roomid)
                console.log(room_entity)
                if (room_entity.isVacant){
                    await entityManager.update(Room,roomid,{isVacant:false})
                    const new_room_entity=await entityManager.findOne(Room,roomid)
                    console.log(new_room_entity)
                    const user_entity:UserEntity=await entityManager.findOne(UserEntity,userid)
                    const entity  = this.create({"Room":new_room_entity,"User":user_entity})
                    return await entityManager.save(entity)
                } 
                else throw new Error("Room occupied")
            })
        }
        catch (err){
            console.log(err)
        }
    }
    

    async updateByUUID(uuid:string,dto:UpdateBookingorderDto){
        var entity = await this.findOneUUID(uuid)
        await this.update(entity,dto)
    }

    async findByUserIDRoomID(userid,roomid){
    
    }

    //     const queryRunner = connection.createQueryRunner();
    //     await queryRunner.connect();
    //     await queryRunner.startTransaction();
    //     try{
    //         await roomServ.occupy(parseInt(dto.roomid))
    //         var room_entity:Room=await roomServ.findOne(parseInt(dto.roomid))
    //         var user_entity:UserEntity=await userServ.findOne(parseInt(dto.userid))
     
    //         var entity  = this.create({"Room":room_entity,"User":user_entity})
    //         await this.save(entity)
    //     }       
    //     catch {
    //         await queryRunner.rollbackTransaction()
    //         console.log("issue encountered, rollingback")
    //     }
    //     finally{
    //         queryRunner.release()
    //     }
    //     return await this.findOneOrFail(entity)
    // }
}   