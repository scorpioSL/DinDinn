import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { treasures } from "./treasures";

@Table
export class money_values extends Model {
    @Column
    amt: number;

    @ForeignKey(() => treasures)
    treasure_id: number;

    @BelongsTo(() => treasures)
    treasure: treasures
}
