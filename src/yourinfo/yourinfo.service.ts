import { Injectable } from '@nestjs/common';

@Injectable()
export class YourinfoService {
    getYourInfo(){
        return{
            name:"Thanawat",
            age:21,
            hobby:"pingpong"
        }
    }
}
