const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        user_id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            },
        },
    },
    {
        sequelize, 
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
)

module.exports = Comment;