import { Sequelize, DataTypes, Model } from 'sequelize';

export class User extends Model {
  declare id: number;
  declare username: string;
  declare password: string;
  declare email: string;
  declare firstName: string;
  declare lastName: string;

  init(sequelize: Sequelize): void {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        firstName: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'users',
        underscored: true,
        schema: 'usersdb',
      }
    );
  }

  associate(): void {
    return;
  }
}
