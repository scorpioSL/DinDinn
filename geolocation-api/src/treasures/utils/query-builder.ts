import { TreasureQueryDto } from "../dto/treasure-query-dto";

export class QueryBuilder {

    static generateTreasuresQuery(payload: TreasureQueryDto) {
        if (!payload.price_value)
            return `SELECT t.*, 111.111 * DEGREES(ACOS(LEAST(1.0, COS(RADIANS(t.latitude)) * COS(RADIANS(${payload.latitude})) * COS(RADIANS(t.longtitude - ${payload.longitude})) + SIN(RADIANS(t.latitude)) * SIN(RADIANS(${payload.latitude}))))) AS distance_in_km FROM treasures AS t having FLOOR(distance_in_km) <= 10;`;
        else {
            return `SELECT t.*,111.111 * DEGREES(ACOS(LEAST(1.0, COS(RADIANS(t.latitude)) * COS(RADIANS(${payload.latitude})) * COS(RADIANS(t.longtitude - ${payload.longitude})) + SIN(RADIANS(t.latitude)) * SIN(RADIANS(${payload.latitude}))))) AS distance_in_km,b.price_value
            FROM treasures AS t
            INNER JOIN (
                SELECT id, MIN(amt) as price_value,treasure_id
                FROM money_values
                where amt > ${payload.price_value}
                GROUP by treasure_id
            ) b ON t.id = b.treasure_id`;
        }

    }
}