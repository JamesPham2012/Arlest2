import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Entity("UserEntity")
export class UserEntity {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  passport: string;


  public cvs(dto:CreateUserDto){
    this.firstName=dto.firstname;
    this.lastName=dto.lastname;
    this.passport=dto.passport
  }
}