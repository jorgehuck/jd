import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('callback')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getData(@Query() query): string {
    console.log('Params :: ', query);

    return this.appService.getData(query);
  }

  @Get('result')
  async getResultData(@Query() query): Promise<string> {
    console.log('getResultData');

    return await this.appService.getResultData();
  }
}
