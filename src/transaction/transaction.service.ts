import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
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
        return error.message;
      }
    }
  }

  async findAllFromOneUser(id: string) {
    const transactions = await this.prisma.transaction.findMany({
      where: { OR: [{ fromId: id }, { toId: id }] },
    });
    return transactions;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
