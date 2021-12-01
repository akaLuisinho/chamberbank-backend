import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Cannot Create User',
        },
        HttpStatus.BAD_REQUEST,
      );
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
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Cannot Find Any User',
        },
        HttpStatus.BAD_REQUEST,
      );
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
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No User Found',
        },
        HttpStatus.NOT_FOUND,
      );
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
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No User Found',
        },
        HttpStatus.NOT_FOUND,
      );
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
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No User Found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async updateBalance(userId: string, value: any) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
      });
      const newBalance = user.balance + value;
      await this.prisma.user.update({
        data: {
          balance: newBalance,
        },
        where: { id: userId },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Cannot Update User Balance',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
