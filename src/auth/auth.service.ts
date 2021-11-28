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

  async login(user: any) {
    console.log(user);
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return {
      user,
      token: this.jwtService.sign(payload),
    };
  }
}
