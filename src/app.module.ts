import { Module } from "@nestjs/common";
import { CatsModule } from "./cats/cats.module";
import { Cat } from "./cats/domain/dtos/cat.dto";
import { CommonService } from "./common/common.service";
import { SharedModule } from "./shared/shared.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [CatsModule, SharedModule, UsersModule],
})
export class AppModule {
  /**
   * Dependency injection
   *
   * A module class can inject providers as well (e.g., for configuration purposes):
   */
  hello() {
    let common: CommonService;
    common.sayHelloTo(new Cat("Root module", "Red"));
  }
}
