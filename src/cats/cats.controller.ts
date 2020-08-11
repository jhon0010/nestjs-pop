import { Controller, Post, Body, Query, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Post()
  createCat(@Body() cat): string {
    console.log(cat);

    return 'We create a cat';
  }

  @Get()
  getCats(): string {
    this.catService.sayHelloToCat();
    return 'Getting the cats';
  }
}
