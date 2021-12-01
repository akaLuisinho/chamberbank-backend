import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { v4 as uuid } from 'uuid';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto, @Request() req) {
    createTransactionDto.id = uuid();
    createTransactionDto.created_at = new Date();
    createTransactionDto.fromId = req.user.id;

    return this.transactionService.create(createTransactionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAllFromOneUser(@Request() req) {
    const transactions = this.transactionService.findAllFromOneUser(
      req.user.id,
    );
    return transactions;
  }
}
