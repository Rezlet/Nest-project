import { Module } from '@nestjs/common';
import { I18nModule, AcceptLanguageResolver, QueryResolver, HeaderResolver } from 'nestjs-i18n';
import * as path from 'path';
const isProd = process.env.NODE_ENV === 'production';
@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: isProd ? path.join(__dirname, '../../i18n') : path.join(process.cwd(), 'src/i18n'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang', 'locale'] },
        new HeaderResolver(['x-custom-lang']),
        { use: AcceptLanguageResolver, options: { matchType: 'strict-loose' } },
      ],
    }),
  ],
})
export class AppI18nModule {}
