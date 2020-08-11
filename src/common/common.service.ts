import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  sayHelloTo(some: Object) {
    console.log(`Saying hello to ${JSON.stringify(some)}`);
  }
}
