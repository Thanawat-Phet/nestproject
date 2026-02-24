import { Injectable } from '@nestjs/common';
import { CreateStudentInfoDto } from './dto/create-student-info.dto';
import { UpdateStudentInfoDto } from './dto/update-student-info.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StudentInfo } from './entities/student-info.entity';

@Injectable()
export class StudentInfoService {

  constructor(
    @InjectModel(StudentInfo)
    private studentModel: typeof StudentInfo,
  ){}
  create(createStudentInfoDto: CreateStudentInfoDto) {
    return 'This action adds a new studentInfo';
  }

  async findAll() {
    return await this.studentModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} studentInfo`;
  }

  update(id: number, updateStudentInfoDto: UpdateStudentInfoDto) {
    return `This action updates a #${id} studentInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentInfo`;
  }
}
