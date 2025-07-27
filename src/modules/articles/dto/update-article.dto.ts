import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ArticleStatus } from '@prisma/client';

export class UpdateArticleDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  content?: any;

  @IsOptional()
  @IsEnum(ArticleStatus)
  status?: ArticleStatus;

  @IsOptional()
  @IsString()
  categoryId?: string;
}
