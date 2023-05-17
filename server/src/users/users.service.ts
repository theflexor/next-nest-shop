import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  findOne(filter: {
    where: { id?: string; username?: string; email?: string };
  }): Promise<User> {
    return this.userModel.findOne({ ...filter });
  }
  async create(
    createUserDto: CreateUserDto,
  ): Promise<User | { warningMessage: string }> {
    const existingByUserName = await this.findOne({
      where: { username: createUserDto.username },
    });
    const existingByUserEmail = await this.findOne({
      where: { username: createUserDto.email },
    });

    if (existingByUserName) {
      return { warningMessage: 'Пользователь с таким именем уже занет' };
    }

    if (existingByUserEmail) {
      return { warningMessage: 'Пользователь c таким email уже существует' };
    }

    const user = new User();
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = hashedPassword;

    return await user.save();
  }
}
