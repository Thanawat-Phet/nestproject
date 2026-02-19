import { Module } from '@nestjs/common';
import { YourinfoController } from './yourinfo.controller';
import { YourinfoService } from './yourinfo.service';

@Module({
  controllers: [YourinfoController],
  providers: [YourinfoService]
})
export class YourinfoModule {}
