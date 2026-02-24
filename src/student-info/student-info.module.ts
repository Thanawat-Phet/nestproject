import { Module } from '@nestjs/common';
import { StudentInfoService } from './student-info.service';
import { StudentInfoController } from './student-info.controller';
import { StudentInfo } from './entities/student-info.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([StudentInfo])],
  controllers: [StudentInfoController],
  providers: [StudentInfoService],
})
export class StudentInfoModule {}
