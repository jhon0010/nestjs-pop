import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import { Cat } from './dtos/cat.dto';

@Injectable()
export class CatsService {
  constructor(private common: CommonService) {}

  sayHelloToCat() {
    let cat = new Cat('Michin', 'Black');

    this.common.sayHelloTo(cat);
  }
}
