import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    
    async create(createUserDto: CreateAuthDto){
        try {
            const existingUser = await this.userModel.findOne({ email: createUserDto.email });
            if (existingUser) {
                throw new ConflictException({ success: false, message: "User is already exit" });
            }
            const createdUser = new this.userModel(createUserDto);
            return await createdUser.save();
        } catch (error) {
            throw error;
        }
        
    }

    async findByEmail(email: string) {
       const  existingUser = await this.userModel.findOne({ email: email });
       return existingUser;
    }
}
