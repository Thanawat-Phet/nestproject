import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalHelperService {
    globalFunc(): string {
        return 'This is global function';
    }
}
