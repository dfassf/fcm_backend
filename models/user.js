const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
        fcm_key:{
            type:Sequelize.STRING(255),
            allowNull:true,
        },      
        misc:{ 
            type:Sequelize.STRING(100),
            allowNull:false,
        },     
    }, {
        sequelize,
        timestamps:true,
        underscored:false,
        paranoid:false,
        modelName:'User',
        tableName:'user',
        charset:'utf8',
        collate:'utf8_general_ci'
    });

    return User;
};