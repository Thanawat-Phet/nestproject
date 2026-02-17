import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //localhost:3000
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //localhost:3000
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('name') //localhost:3000/name
  getName():string{
    return this.appService.getName();
  }

  @Get('json') //localhost:3000/json
  getJson(){
    return this.appService.getJson();
  }
}
