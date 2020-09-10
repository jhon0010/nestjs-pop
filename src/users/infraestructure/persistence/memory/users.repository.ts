import { User } from "src/users/domain/model/user.model";
import { Injectable } from "@nestjs/common";
import { Observable, of } from "rxjs";

@Injectable()
export class UserRepository {
  private users: Map<string, User> = new Map();

  constructor() {
    let user1: User = new User();
    user1.identity_type = "CC";
    user1.identity_number = "4";
    user1.name = "Jhon";
    user1.address = "Somewhere";
    user1.phoneNumber = "300XXXXXX";
    user1.cats = [];

    this.save(user1);
  }

  save(user: User): Observable<User> {
    this.users.set(user.identity_number, user);
    return of(user);
  }

  update(user: User): User {
    this.users.set(user.identity_number, user);
    return user;
  }

  getAll() {
    return this.users;
  }

  getById(id: string): Observable<User> {
    return of(this.users.get(id));
  }

  delete(id: string): Boolean {
    return this.users.delete(id);
  }
}
