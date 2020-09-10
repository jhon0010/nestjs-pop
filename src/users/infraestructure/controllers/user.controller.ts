import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { UsersService } from "src/users/application/services/user.service";
import { User } from "src/users/domain/model/user.model";

@Controller("users")
export class UserController {
  constructor(private usersService: UsersService) {}

  @Get(":userId")
  getUser(@Param() params): Observable<User> {
    console.log(`Get user with id = ${params}`);

    return this.usersService.getById(params.userId);
  }

  @Post(":userId")
  addCat(@Body() cat, @Param() params): string {
    console.log(`Calling the users controller with data cat = ${cat} and params = ${params}` + cat);

    let returnedUser;

    this.usersService
      .getById(params.userId)
      .pipe(
        tap((user) => {
          user.cats.push(cat);
          this.usersService.update(user);
        })
      )
      .subscribe((user) => {
        returnedUser = user;
      });

    return `We add a cat to user ${JSON.stringify(returnedUser)}`;
  }
}
