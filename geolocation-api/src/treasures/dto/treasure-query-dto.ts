import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsString, Min, Max, IsOptional, IsInt, Equals } from 'class-validator';
import { IsEqualsTo } from 'src/utils/validators/properties-equal.validator';

export class TreasureQueryDto {
    @ApiProperty({ description: 'Latitude of the treasure box', required: true, example: '1.3273451' })
    @IsString()
    @IsNotEmpty()
    latitude: string;

    @ApiProperty({ description: 'Longitude of the treasure box', required: true, example: '103.8756757' })
    @IsString()
    @IsNotEmpty()
    longitude: string;

    @ApiProperty({ description: 'Distance of the treasure box (must be 1 or 10)', required: true,  example: 1 })
    @IsNumber()
    @IsNotEmpty()
    @IsEqualsTo([1, 10])
    distance: number;

    @ApiProperty({ description: 'Price value of the treasure box', nullable: true, required: false, maximum: 30, minimum: 10, example: 10 })
    @IsNumber()
    @IsInt()
    @IsOptional()
    @Min(10)
    @Max(30)
    price_value?: number;
}
