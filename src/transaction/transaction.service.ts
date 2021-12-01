import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
@Injectable()
export class TransactionService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    if (createTransactionDto.toId === createTransactionDto.fromId) {
      return;
    } else {
      try {
        //set account balance from the user that receive the transaction
        await this.userService.updateBalance(
          createTransactionDto.toId,
          createTransactionDto.moneyQuantity,
        );

        //set account balance from the user that sent the transaction
        await this.userService.updateBalance(
          createTransactionDto.fromId,
          -Math.abs(createTransactionDto.moneyQuantity),
        );

        return await this.prisma.transaction.create({
          data: createTransactionDto,
        });
      } catch (error) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Could not create transaction',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  async findAllFromOneUser(id: string) {
    try {
      const transactions = await this.prisma.transaction.findMany({
        where: { OR: [{ fromId: id }, { toId: id }] },
      });
      return transactions;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Could not find transactions',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
