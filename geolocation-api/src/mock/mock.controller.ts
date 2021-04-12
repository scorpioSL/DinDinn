import { Controller, Get, Req, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express'
import { MockService } from './mock.service';

@Controller('mock')
export class MockController {

    constructor(private mockService: MockService) { }
    @ApiTags('MockData')
    @ApiOperation({
        summary: 'Import the mock data to the database from provided excel file in the assets folder',
        description: 'Endpoint which is created to insert mock data to the database automatically from excel file'
    })
    @ApiResponse({ status: 200, description: 'OK' })
    @ApiResponse({ status: 409, description: 'Conflict' })
    @Get()
    async getMock(@Req() req: Request, @Res() res: Response) {
        this.mockService.readMockData(res)
    }
}
