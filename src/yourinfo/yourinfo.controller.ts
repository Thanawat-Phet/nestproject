import { Controller,Get } from '@nestjs/common';
import { YourinfoService } from './yourinfo.service';

@Controller('yourinfo')
export class YourinfoController {
    constructor(private readonly yourinfoService: YourinfoService) {}

    @Get()
    getYourInfo(): any {
        return this.yourinfoService.getYourInfo();
    }
}
