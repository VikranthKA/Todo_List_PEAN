import {Model,DataTypes} from 'sequelize'
import { sequelize } from '../../db/dbConfig'
import { UserAttributes } from '../interfaces/user'

export class User extends Model<UserAttributes> implements UserAttributes{
    public id!:number;
    public username!:string;
    public email!:string;
    public password!: string;//can password be private

    public readonly createdAt!:Date;
    public readonly updatedAt!:Date
}


User.init(
    {
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING(128),
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING(128),
            allowNull:false,
            unique:true,
        },
        password:{
            type:DataTypes.STRING(128),
            allowNull:false,
        }
    },
    {
        sequelize,
        tableName:"users"
    }
)