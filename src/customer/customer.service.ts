import { Body, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {

  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
  ){}

  create(createCustomerDto: CreateCustomerDto) {
    // return this.customerRepository.create(createCustomerDto);
    return 'This action adds a new customer';
  }

  async findAll() {
    return this.customerModel.findAll();
  }

  async findFullname(fullname:string){
    return  await this.customerModel.findOne({
      where:{
        fullname:fullname
      },
    });
  }

  async createCustomer(@Body() createCustomerDto: CreateCustomerDto){
    return await this.customerModel.create(createCustomerDto as Partial<Customer>);
  }

  async updateCustomer(id:number, updateCustomerDto: UpdateCustomerDto){
    return await this.customerModel.update(updateCustomerDto,{
      where: {id: id}});
  }

  async removeCustomer(id:number){
    return await this.customerModel.destroy({where:{id:id}});
  }

  async findOne(id: number) {
    return await this.customerModel.findOne({where:{id}});
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerModel.update(updateCustomerDto,{where:{id}});
  }

  remove(id: number) {
    return this.customerModel.destroy({where:{id}});
  }
}
