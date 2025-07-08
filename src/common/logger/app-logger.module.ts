import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            options: {
              colorize: true, // 🎨 màu sắc
              singleLine: true, // 🧵 in trên 1 dòng
              translateTime: 'HH:MM:ss.l', // ⏱ định dạng thời gian
              ignore: 'pid,hostname', // 🧹 ẩn bớt thông tin dư
            },
          },
        },
      },
    }),
  ],
})
export class AppLoggerModule {}
