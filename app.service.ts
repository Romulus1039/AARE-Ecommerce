import { Injectable } from '@nestjs/common';
import {  } from "module";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
