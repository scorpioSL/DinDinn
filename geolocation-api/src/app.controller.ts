import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiTags('Test Server')
  @ApiOperation({
    summary: 'Test the server status',
    description: 'Check if the server has successfully started or not'
  })
  @ApiResponse({ status: 200, description: 'OK' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
