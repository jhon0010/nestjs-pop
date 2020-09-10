import { Injectable } from "@nestjs/common";
import { CommonService } from "src/common/common.service";
import { Cat } from "./domain/dtos/cat.dto";
import { SharedService } from "src/shared/shared.service";

@Injectable()
export class CatsService {
  /**
   * We can use the shared module without import it.
   * @param common
   * @param sharedGlobalModule
   */
  constructor(private common: CommonService, private sharedGlobalModule: SharedService) {}

  sayHelloToCat() {
    let cat = new Cat("Michin", "Black");
    cat.name = this.sharedGlobalModule.addDateToString(cat.name);
    this.common.sayHelloTo(cat);
  }
}
