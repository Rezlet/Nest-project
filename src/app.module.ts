import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AppI18nModule } from './common/app-i18n/app-i18n.module';
import { AppLoggerModule } from './common/logger/app-logger.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { AuthController } from './modules/auth/auth.controller';
import { JwtAuthGuard, RolesGuard } from './common/jwt';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PrismaModule,
    AppI18nModule,
    AppLoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArticlesModule,
  ],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
