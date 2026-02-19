import { Controller,Get } from '@nestjs/common';
import { YourinfoService } from './yourinfo.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('yourinfo')
export class YourinfoController {
    constructor(private readonly yourinfoService: YourinfoService, private readonly utilityService: UtilityService, private readonly globalHelperService: GlobalHelperService) {}

    @Get()
    getYourInfo(): any {
        return this.yourinfoService.getYourInfo();
    }

    @Get('share') //localhost:3000/yourinfo/share
    getShare(): string {
        return this.utilityService.shareFunc();
    }
    @Get('global') //localhost:3000/yourinfo/global
    getGlobal(): string {
        return this.globalHelperService.globalFunc();
    }
}
