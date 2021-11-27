import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(accountCode: string, pass: string): Promise<any> {
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
    const payload = {
      ...user,
    };

    return {
      user,
      token: this.jwtService.sign(payload),
    };
  }
}
