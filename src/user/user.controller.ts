import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from '../auth/auth.service';
import { v4 as uuid } from 'uuid';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    createUserDto.id = uuid();
    createUserDto.accountCode = Math.round(Math.random() * 987634).toString();
    createUserDto.balance = 0;
    createUserDto.created_at = new Date();
    createUserDto.updated_at = new Date();

    return this.userService.create(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/id/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/accountCode/:accountCode')
  findByAccountCode(@Param('accountCode') accountCode: string) {
    return this.userService.findByAccountCode(accountCode);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/cpf/:cpf')
  findByCPF(@Param('cpf') cpf: string) {
    return this.userService.findByCPF(cpf);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/deposit')
  addMoney(@Body() body: any, @Request() req) {
    return this.userService.updateBalance(req.user.id, body.moneyQuantity);
  }
}
