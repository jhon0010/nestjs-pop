import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/users/infraestructure/persistence/memory/users.repository";
import { User } from "src/users/domain/model/user.model";
import { Observable } from "rxjs";

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  save(user: User): Observable<User> {
    return this.userRepository.save(user);
  }

  update(user: User): User {
    this.userRepository.update(user);
    return user;
  }

  getAll() {
    return this.userRepository.getAll();
  }

  getById(id: string): Observable<User> {
    return this.userRepository.getById(id);
  }

  delete(id: string) {
    this.userRepository.delete(id);
  }
}
