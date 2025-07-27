import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { JwtAuthGuard } from '../../common/jwt';
import { Roles } from '../../common/decorations/roles.decorator';
import { RequestWithUser } from 'src/common/interfaces/request-with-user.interface';

@Controller('articles')
@UseGuards(JwtAuthGuard)
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Post()
  @Roles('ADMIN', 'EDITOR')
  create(@Body() dto: CreateArticleDto, @Request() req: RequestWithUser) {
    return this.articleService.create(dto, req.user.sub);
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Patch(':id')
  @Roles('ADMIN', 'EDITOR')
  update(@Param('id') id: string, @Body() dto: UpdateArticleDto) {
    return this.articleService.update(id, dto);
  }

  @Delete(':id')
  @Roles('ADMIN', 'EDITOR')
  remove(@Param('id') id: string) {
    return this.articleService.remove(id);
  }
}
