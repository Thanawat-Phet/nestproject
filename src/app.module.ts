import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { YourinfoModule } from './yourinfo/yourinfo.module';
import { UtilityModule } from './shared/utility/utility.module';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import { Customer } from './customer/entities/customer.entity';
@Module({
  imports: [ProductModule, YourinfoModule, UtilityModule, GlobalHelperModule, CustomerModule, ConfigModule.forRoot(),
    SequelizeModule.forRoot({
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    models: [Customer], //Table
  }),
  ProductModule,
  UtilityModule,
  GlobalHelperModule,
  CustomerModule,  
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
