import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! eiei';
  }

  getName(): string {
    return "Thanawat Jack";
  }

  getJson(){
    return {
      name:"Thanawat",
      lastName:"Srisuwan",
      age:21,
      city:"phuket",
      version: process.env.API_VERSION,
    }
  }

}
