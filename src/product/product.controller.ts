import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @Get() //localhost:3000/product
    getProduct(): string {
        return this.productService.productFunc();
    }

    @Get('product2') //localhost:3000/product/product2
    getProduct2(): string {
        return this.productService.productFunc2();
    }
}
