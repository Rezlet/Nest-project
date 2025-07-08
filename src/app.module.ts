import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppI18nModule } from './common/app-i18n/app-i18n.module';
import { AppLoggerModule } from './common/logger/app-logger.module';

@Module({
  imports: [UserModule, AuthModule, BookmarkModule, PrismaModule, AppI18nModule, AppLoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
