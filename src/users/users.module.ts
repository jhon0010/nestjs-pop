import { Module } from "@nestjs/common";
import { UserController } from "./infraestructure/controllers/user.controller";
import { UsersService } from "./application/services/user.service";
import { UserRepository } from "./infraestructure/persistence/memory/users.repository";

@Module({
  controllers: [UserController],
  providers: [UsersService, UserRepository],
})
export class UsersModule {}
