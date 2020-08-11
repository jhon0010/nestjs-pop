import { Injectable } from "@nestjs/common";

@Injectable()
export class SharedService {
  addDateToString(value: string): string {
    return value.concat(new Date().toISOString());
  }
}
