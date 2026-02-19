import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    productFunc():string {
        return `This is product function`;
    }

    productFunc2():string {
        return 'This is product function 2';
    }
}
