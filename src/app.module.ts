import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { Cat } from './cats/dtos/cat.dto';
import { CommonService } from './common/common.service';

@Module({
  imports: [CatsModule],
})
export class AppModule {
  hello() {
    let common: CommonService;
    common.sayHelloTo(new Cat('Root module', 'Red'));
  }
}
