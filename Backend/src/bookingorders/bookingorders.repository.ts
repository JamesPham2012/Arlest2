import { async } from "rxjs";
import { Room } from "src/rooms/entities/room.entity";
import { RoomsService } from "src/rooms/rooms.service";
import { UserEntity } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";
import { Connection, Entity, EntityManager, EntityRepository, LessThan, Repository, Transaction } from "typeorm";
import { CreateBookingorderDto } from "./dto/create-bookingorder.dto";
import { UpdateBookingorderDto } from "./dto/update-bookingorder.dto";
import { BookingOrder } from "./entities/bookingorder.entity";




@EntityRepository(BookingOrder)
export class BookingOrderRepository extends Repository<BookingOrder>{
    async updateVacancy(date,connection:Connection) {//NOTE, THIS CODE NEED TO BE CHANGED TO INJECT SERVICE FROM ROOM SERVICE
        console.log("-----------------------------")
        var list =await this.find({
         where: { 
             check_out_date:  LessThan(date) },
      });
      console.log(list)
      await connection.manager.transaction(
          async entityManager => {
            for (const entity of list){
                const target = await entityManager.find(Room,{RoomID:entity.room_id})
                console.log(entity.getRoomID())
                await entityManager.update(Room,target,{"isVacant":true})
                console.log("done deleting  ")
            }
          }
      )
    }



    async findOneUUID(id: string) {
        return await this.findOne({uuid:`${id}`});
    }
    async addBooking(dto,connection:Connection){
        try{
            return await connection.manager.transaction(async entityManager => {
                const room_entity:Room=await entityManager.findOne(Room,dto["roomid"])
                console.log(room_entity)
                if (room_entity.isVacant){
                    await entityManager.update(Room,dto["roomid"],{isVacant:false})
                    const new_room_entity=await entityManager.findOne(Room,dto["roomid"])
                    console.log(new_room_entity)
                    const user_entity:UserEntity=await entityManager.findOne(UserEntity,dto["userid"])
                    const entity  = this.create({"Room":new_room_entity,"User":user_entity,...dto})
                    console.log(entity)
                    return await entityManager.save(entity)
                } 
                else throw new Error("Room occupied")
            })
        }
        catch (err){
            console.log(err)
        }
    }

    // async addBookingSRP(userid,roomid,roomService:RoomsService,userService:UsersService,connection:Connection){
    //     const room_entity:Room=await roomService.findRoomByID();// can be sent to room service later, add 1 function to check vacancy of room
    //     const user_entity:UserEntity=await userService.findUserByID();
    //     if (room_entity.isVacant){
    //         try{
    //             return await connection.manager.transaction(async entityManager => {
    //                 await entityManager.update(Room,room_entity,{isVacant:false})
    //                 const entity  = this.create({"Room":room_entity,"User":user_entity})
    //                 return entityManager.save(entity)
    //             })
    //         }
    //         catch(err){
    //             throw err;
    //         }
            
    //     }
    //     else throw new Error("Room occupied")
    // }
    

    async removeOld(date:Date): Promise<any> {
        console.log("-----------------------------")
        var list =await this.find({
         where: { 
             check_out_date:  LessThan(date) },
      });
      console.log(list)
      for (const entity of list){
          console.log(entity)
          await this.remove(entity)
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