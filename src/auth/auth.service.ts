import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class AuthService {
  constructor(private readonly i18n: I18nService) { }

  private users = [
    { id: 1, email: 'test@gmail.com', password: '$2b$10$7s9Rw6DPUU' }, // password bcrypt
  ];

  async login(data: LoginDto) {
    const user = this.users.find(u => u.email === data.email);

    if (!user) {
      throw new UnauthorizedException(
        this.i18n.t('common.invalid_credentials')
      );
    }

    const match = await bcrypt.compare(data.password, user.password);
    if (!match) {
      throw new UnauthorizedException(
        this.i18n.t('common.invalid_credentials')
      );
    }

    return {
      status: 200,
      message: this.i18n.t('common.login_success'),
      token: 'fake-jwt-token'
    };
  }

}
