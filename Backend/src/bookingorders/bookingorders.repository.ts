import { Room } from "src/rooms/entities/room.entity";
import { RoomsService } from "src/rooms/rooms.service";
import { UserEntity } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";
import { Connection, EntityRepository, Repository, Transaction } from "typeorm";
import { CreateBookingorderDto } from "./dto/create-bookingorder.dto";
import { BookingOrder } from "./entities/bookingorder.entity";




@EntityRepository(BookingOrder)
export class BookingOrderRepository extends Repository<BookingOrder>{
    async CSaddBooking(dto:CreateBookingorderDto,roomServ:RoomsService,userServ:UsersService,connection:Connection){
        try{
            connection.manager.transaction(async entityManager => {
                await entityManager.update(Room,dto.roomid,{isVacant:()=>"false"})
                const room_entity:Room=await entityManager.findOne(Room,dto.roomid)
                throw new Error("custom issue encountered, rolling back")
                const user_entity:UserEntity=await entityManager.findOne(UserEntity,dto.userid)
                const entity  = this.create({"Room":room_entity,"User":user_entity})
                await entityManager.save(entity)
            })
        }
        catch (err){
            console.log(err)
        }
        return 
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