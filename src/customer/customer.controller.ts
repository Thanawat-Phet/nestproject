import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Get('/findfullname/:fullname') //localhost:3000/customer/findfullname/:fullname
  async findFullname(@Param('fullname') fullname: string) {
    const findfullname = await this.customerService.findFullname(fullname);
    if (findfullname==null){
      throw new Error('not found');
    }
    return findfullname;
  }

  @Post('/create') //localhost:3000/customer/create
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto){
    const createcustomer = await this.customerService.createCustomer(createCustomerDto);
    if (createcustomer==null){
      throw new Error('Can not Create Deta!');
    }
    return {
      message:'Create Success',
      data:createcustomer
    }
  }

  @Patch('/update/:id') //localhost:3000/customer/update/:id
  async updateCustomer(@Param('id') id: string,
  @Body() updateCustomerDto: UpdateCustomerDto){
    const updatecustomer = await this.customerService.updateCustomer(+id,updateCustomerDto);
    if (updatecustomer==null){
      throw new NotFoundException('Can not Update Deta!');
    }
    return {
      message:'Update Data Success',
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }

  @Delete('/delete/:id') //localhost:3000/customer/delete/:id
  async deleteCustomer(@Param('id') id: string){
    const deletecustomer = await this.customerService.remove(+id);
    if (deletecustomer==null){
      throw new NotFoundException('Can not Delete Deta!');
    }
    return {
      message:'Delete Data Success',
    }
  }
}
