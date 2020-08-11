import { Module, Global } from "@nestjs/common";
import { SharedService } from "./shared.service";

/**
 * When you want to provide a set of providers which should be available everywhere out-of-the-box
 * (e.g., helpers, database connections, etc.), make the module global with the @Global() decorator.
 */
@Global()
@Module({
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
