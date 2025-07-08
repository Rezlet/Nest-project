import { HttpStatus, Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { Logger } from 'nestjs-pino';
import { TestException } from 'src/common/exceptions/test-exception/test.exception';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: Logger,
    private readonly i18n: I18nService,
  ) {}

  signup() {
    this.logger.log('This is a log');
    this.logger.warn('This is a warning');
    this.logger.error('This is an error');
    throw new TestException(this.i18n.t('auth.invalid_credentials'), HttpStatus.NOT_FOUND);
    return { msg: 'I am signed up' };
  }

  signin() {
    return { msg: 'I am signed in' };
  }
}
