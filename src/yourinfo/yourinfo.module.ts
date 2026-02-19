import { Module } from '@nestjs/common';
import { YourinfoController } from './yourinfo.controller';
import { YourinfoService } from './yourinfo.service';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  controllers: [YourinfoController],
  providers: [YourinfoService],
  imports: [UtilityModule]
})
export class YourinfoModule {}
