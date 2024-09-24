import { Model,DataTypes } from 'sequelize';
import { sequelize } from '../../db/dbConfig';
import { User } from './user.model';
import { TodoAttributes } from '../interfaces/todo';

export class Todo extends Model<TodoAttributes> implements TodoAttributes{
    public id!: number;
    public title!: string;
    public description!: string;
    public completed!: boolean;
    public createdBy!: number;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Todo.init(
    {
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING(128),
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING(255),
            allowNull:true
        },
        completed:{
            type:DataTypes.BOOLEAN,
            defaultValue:false,
        },
        createdBy:{
            type:DataTypes.INTEGER,
            references:{
                model:User,
                key:'id'
            },
            allowNull:false
        }
    },{
        sequelize,
        tableName:'todos'
    }
)


//RelationShip btw models
Todo.belongsTo(User,{
    foreignKey:'createdBy',as:'user'
})

User.hasMany(Todo,{
    foreignKey:'createdBy',as:'todos'
})