import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    accountCode: string,
    pass: string,
  ): Promise<CreateUserDto> {
    const user = await this.userService.findByAccountCode(accountCode);
    if (user) {
      if (await bcrypt.compare(pass, user.password)) {
        user.password = undefined;
        return user;
      }
      return null;
    }
    return null;
  }

  async login(user: CreateUserDto) {
    const payload = {
      ...user,
    };

    return {
      user,
      token: this.jwtService.sign(payload),
    };
  }
}
