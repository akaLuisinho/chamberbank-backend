import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    if (await this.findByCPF(createUserDto.cpf)) {
      return 'user already exists';
    }

    try {
      const hashedPass = await bcrypt.hash(createUserDto.password, 12);
      createUserDto.password = hashedPass;

      return await this.prisma.user.create({
        data: createUserDto,
      });
    } catch (error) {
      //unable to create user
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany({
        include: {
          receivedTransations: true,
          sentTransations: true,
        },
      });
    } catch (error) {
      //no users found
      return error.message;
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      //user not found
      return error.message;
    }
  }

  async findByAccountCode(accountCode: string) {
    try {
      return await this.prisma.user.findUnique({
        where: {
          accountCode: accountCode,
        },
      });
    } catch (error) {
      //user not found
      return error.message;
    }
  }

  async findByCPF(cpf: string) {
    try {
      return await this.prisma.user.findUnique({
        where: {
          cpf: cpf,
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        data: updateUserDto,
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error.message;
      //unable to update user
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.user.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error.message;
      //unable to delete account
    }
  }
}
