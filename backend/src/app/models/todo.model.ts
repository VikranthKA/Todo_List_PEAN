import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../db/dbConfig';
import { TodoAttributes } from '../interfaces/todo';
import User from './user.model'; // Import User model correctly

class Todo extends Model<TodoAttributes> implements TodoAttributes {
    public id!: number;
    public title!: string;
    public description!: string;
    public completed!: boolean;
    public createdBy!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Todo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        createdBy: {
            type: DataTypes.STRING,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'todos',
    }
);

export default Todo;
