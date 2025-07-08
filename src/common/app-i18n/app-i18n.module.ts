import { Module } from '@nestjs/common';
import { I18nModule, AcceptLanguageResolver, QueryResolver, HeaderResolver } from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '../../../src/i18n/'),
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