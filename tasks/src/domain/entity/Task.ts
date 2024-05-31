import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../config/db';
import User from './User';

interface TaskAttributes {
    id?: number;
    nome: string;
    descricao: string;
    disciplina: string;
    periodo: string;
    done: boolean;
    userReferenceId: string; // Este campo será usado para o relacionamento
    cor: string;
    prioridade: number;
}

interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> {}

class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
    public id!: number;
    public nome!: string;
    public prioridade!: number;
    public cor!: string;
    public descricao!: string;
    public disciplina!: string;
    public periodo!: string;
    public done!: boolean;
    public userReferenceId!: string;
}

// Inicialização do modelo Task
Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prioridade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        disciplina: {
            type: DataTypes.STRING,
            allowNull: false
        },
        periodo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        done: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        userReferenceId: {
            type: DataTypes.CHAR(36),
            allowNull: false,
            references: {
                model: 'Users', // Nome da tabela referenciada
                key: 'referenceId'
            }
        }
    },
    {
        sequelize,
        tableName: 'Tasks',
        timestamps: false, // Desativa createdAt e updatedAt
    }
);

// Definindo a associação entre Tasks e Users
Task.belongsTo(User, { foreignKey: 'userReferenceId', onDelete: 'CASCADE' }); // Task pertence a User
User.hasMany(Task, { foreignKey: 'userReferenceId' }); // User possui várias Tasks

// Função para sincronizar o modelo Task com o banco de dados
async function syncTaskModel() {
    try {
        await sequelize.sync();
        console.log('Modelo Task sincronizado com o banco de dados.');
    } catch (error) {
        console.error('Erro ao sincronizar o modelo Task com o banco de dados:', error);
    }
}

// Sincroniza o modelo Task com o banco de dados
syncTaskModel();

export default Task;
