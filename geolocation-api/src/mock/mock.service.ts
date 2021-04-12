import { Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { money_values } from 'src/database/money_values';
import { treasures } from 'src/database/treasures';
import { user } from 'src/database/user';
import { Response } from 'express';
import * as XLSX from 'xlsx';
import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize'

@Injectable()
export class MockService {
    constructor(
        @InjectModel(user) private userModel: typeof user,
        @InjectModel(treasures) private treasureModel: typeof treasures,
        @InjectModel(money_values) private moneyValuesModel: typeof money_values,
        private sequelize: Sequelize
    ) { }

    async readMockData(@Res() res: Response): Promise<any> {

        // check wether data already exhists
        let findExists: treasures[] = await this.treasureModel.findAll();
        if (findExists) return res.status(409).send('Data already exists!').end();

        // read local excel file and import the data
        let workbook = XLSX.readFile(`${__dirname}/../assets/xls/data.xlsx`);
        let sheet_name_list: string[] = workbook.SheetNames;
        try {
            sheet_name_list.forEach(async (value: string, index: number) => {
                let xlData: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[value]);
                xlData.forEach(async (rowValue: any, rowKey: number) => {
                    if (value == 'treasures') {
                        await this.treasureModel.create(
                            { id: rowValue.id, latitude: rowValue.latitude, longtitude: rowValue.longtitude, name: rowValue.Name }
                        )
                    } else if (value == 'users') {
                        await this.userModel.create(
                            { id: rowValue.id, name: rowValue.name, age: rowValue.age, password: rowValue.password, email: rowValue.email }
                        )
                    }
                    else {
                        if (typeof rowValue[Object.keys(rowValue)[0]] == 'string') return;
                        await this.moneyValuesModel.create(
                            { treasure_id: rowValue[Object.keys(rowValue)[0]], amt: rowValue[Object.keys(rowValue)[1]] }
                        )
                    }
                });
            })

        } catch (err) {
            console.log(err);
            return res.json({ error: err }).status(500);
        }
        res.status(200).send('success!');
    }
}
