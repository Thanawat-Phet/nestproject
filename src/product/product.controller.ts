import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService, private readonly utilityService: UtilityService, private readonly globalHelperService: GlobalHelperService) {}
    @Get() //localhost:3000/product
    getProduct(): string {
        return this.productService.productFunc();
    }

    @Get('product2') //localhost:3000/product/product2
    getProduct2(): string {
        return this.productService.productFunc2();
    }

    @Get('share') //localhost:3000/product/share
    getShare(): string {
        return this.utilityService.shareFunc();
    }

    @Get('global') //localhost:3000/product/global
    getGlobal(): string {
        return this.globalHelperService.globalFunc();
    }
}
