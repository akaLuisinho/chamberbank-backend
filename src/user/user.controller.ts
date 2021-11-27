import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LocalAuthGuard } from '../auth/local.auth-guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuid } from 'uuid';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    createUserDto.id = uuid();
    createUserDto.accountCode = Math.round(Math.random() * 987634).toString();
    createUserDto.balance = 0;
    createUserDto.extract = [];
    createUserDto.created_at = new Date();
    createUserDto.updated_at = new Date();

    return this.userService.create(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
