import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import { treasures } from 'src/database/treasures';
import { TreasureQueryDto } from './dto/treasure-query-dto';
import { QueryBuilder } from './utils/query-builder';
import { QueryResultsResponse } from '../utils/responses/query-results.response'

@Injectable()
export class TreasuresService {
    constructor
        (
            @InjectModel(treasures) private treasureModel: typeof treasures,
    ) { }

    async treasuresQuery(body: TreasureQueryDto, req: Request, res: Response) {
        // running a raw query since the query will become more complex if it is ran by orm
        try {
            let query: string = QueryBuilder.generateTreasuresQuery(body);
            let response: QueryResultsResponse = new QueryResultsResponse(200, "SUCCESS");
            response.results = await this.treasureModel.sequelize.query(query, { type: QueryTypes.SELECT });
            response.statusCode = 200;
            return res.json(response).end();
        } catch (error) {
            let response = new QueryResultsResponse(500, "FAILURE");
            response.error = error
            return res.json(response).end();
        }

    }
}
