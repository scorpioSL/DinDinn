import { Column, HasMany, Model, Table, PrimaryKey } from "sequelize-typescript";
import { money_values } from "./money_values";

@Table
export class treasures extends Model {
    @PrimaryKey
    @Column
    id:number;
    
    @Column
    latitude: string;
    @Column
    longtitude: string;
    @Column
    name: string;

    @HasMany(() => money_values)
    money_values: money_values[];

}
