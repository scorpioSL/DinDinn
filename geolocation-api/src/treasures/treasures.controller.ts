import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { Request, Response } from 'express'
import { TreasureQueryDto } from './dto/treasure-query-dto';
import { TreasuresService } from './treasures.service';

@Controller('api/treasures')
export class TreasuresController {
    constructor(private treasuresService: TreasuresService) { }

    @ApiTags('Treasures')
    @ApiOperation({
        summary: 'Query treasure boxes'
    })
    @ApiBody({ type: TreasureQueryDto })
    @ApiResponse({ status: 201, description: 'OK' })
    @ApiResponse({ status: 409, description: 'Conflict' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @Post('query')
    async treasuresQuery(@Body() body: TreasureQueryDto, @Req() req: Request, @Res() res: Response) {
        this.treasuresService.treasuresQuery(body, req, res);
    }
}
