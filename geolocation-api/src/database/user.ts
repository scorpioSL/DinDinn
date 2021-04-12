import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class user extends Model {
    @PrimaryKey
    @Column
    id:number;

    @Column
    name: string;

    @Column
    age: number;

    @Column
    password: string;
    
    @Column
    email: string;
}
